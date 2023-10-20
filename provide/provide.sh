#!/usr/bin/env bash

# Update and Upgrade System
update_system() {
    apt update
    apt upgrade
}

# Configure Firewall
setup_firewall() {
    ufw allow ssh
    ufw allow 80/tcp
    ufw allow 443/tcp
    ufw enable
}

# Add worker user
add_worker_user() {
    adduser --disabled-password worker
    mkdir ~worker/.ssh
    cp ~root/.ssh/authorized_keys ~worker/.ssh/
    chmod 600 -R ~worker/.ssh/
    chmod 700 ~worker/.ssh
    chown worker:worker -R ~worker/.ssh
}

# Install Docker and Docker-Compose
install_docker() {
    apt install -y apt-transport-https ca-certificates curl software-properties-common
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list >/dev/null
    apt update
    apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

    usermod -aG docker worker
}

# Install ZSH and ohmyzsh and set it as default shell
install_zsh() {
    apt install -y zsh
    sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

    # Set zsh as default shell for all users
    chsh -s $(which zsh)
    echo "Setting zsh as default shell for new users..."
    useradd -D -s $(which zsh)
}

# Configure tmux globally
configure_tmux() {
    cat >/etc/tmux.conf <<EOF
set -s escape-time 1
# set -g mouse on
# remap prefix from 'C-b' to 'C-a'
unbind C-b
set-option -g prefix C-a
bind-key C-a last-window
EOF
}

# Install NodeJS 20 and pnpm
install_node() {
    apt-get update && sudo apt-get install -y ca-certificates curl gnupg
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
    NODE_MAJOR=20
    echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
    apt update
    apt install -y nodejs
    npm install -g pnpm
}

# Install nginx and Certbot
install_nginx_certbot() {
    apt install -y nginx
    ln -s /etc/nginx/sites-available/api.neokingdom.org /etc/nginx/sites-enabled

    apt install -y snapd
    snap install core
    snap install --classic certbot
    sudo ln -s /snap/bin/certbot /usr/bin/certbot
    certbot --nginx
}

setup_firewall
add_worker_user
install_docker
install_zsh
configure_tmux
install_node
install_nginx_certbot
update_system
