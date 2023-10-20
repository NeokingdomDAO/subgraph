#!/usr/bin/env bash

# Check if EMAIL and DOMAIN are defined
validate_variables() {
    if [ -z "$EMAIL" ] || [ -z "$DOMAIN" ]; then
        echo "Error: EMAIL and DOMAIN must be set before running the script."
        exit 1
    fi
}

# Install common packages and Update & Upgrade System
install_essentials() {
    apt update
    apt upgrade
    apt install -y \
        apt-transport-https \
        build-essential \
        ca-certificates \
        curl \
        git \
        gnupg \
        snapd \
        software-properties-common \
        tmux
}

# Configure Firewall
setup_firewall() {
    ufw allow ssh
    ufw allow 80/tcp
    ufw allow 443/tcp
    echo "y" | ufw enable
}

# Add worker user
add_worker_user() {
    adduser --disabled-password --gecos "" worker
    mkdir ~worker/.ssh
    cp ~root/.ssh/authorized_keys ~worker/.ssh/
    chmod 600 -R ~worker/.ssh/
    chmod 700 ~worker/.ssh
    chown worker:worker -R ~worker/.ssh
}

# Install Docker and Docker-Compose
install_docker() {
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list >/dev/null
    apt update
    apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

    # Add the user worker to the group
    usermod -aG docker worker
}

# Install ZSH and ohmyzsh and set it as default shell
install_zsh() {
    apt install -y zsh
    local CHSH=yes
    local RUNZSH=no
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
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
    NODE_MAJOR=20
    echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
    apt update
    apt install -y nodejs
    npm install -g pnpm
}

# Install and configure nginx
install_configure_nginx() {
    apt install -y nginx

    # Embed the server configuration with the correct domain
    cat >/etc/nginx/sites-available/$DOMAIN <<EOF
server {
    server_name $DOMAIN;

    location /ipfs/api/v0/add {
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_pass http://127.0.0.1:5001/api/v0/add;
    }

    location /ipfs/api/v0/pin/add {
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_pass http://127.0.0.1:5001/api/v0/pin/add;
    }

    location / {
        proxy_pass http://127.0.0.1:8000;
    }
}
EOF

    # Enable the site
    ln -s /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled
}

# Install and configure certbot
install_configure_certbot() {
    snap install core
    snap install --classic certbot
    sudo ln -s /snap/bin/certbot /usr/bin/certbot
    certbot --nginx --non-interactive --agree-tos --email $EMAIL -d $DOMAIN
}

# Helper function to print boxed colored messages
print_step() {
    local message="$1"
    local len=${#message}
    local border=$(printf '%0.s-' $(seq 1 $len))

    printf "\e[34m+-$border-+\e[0m\n"  # Top border
    printf "\e[34m| $message |\e[0m\n" # Message
    printf "\e[34m+-$border-+\e[0m\n"  # Bottom border
}

# Check configuration
print_step "Validating EMAIL and DOMAIN..."
validate_variables

# Install and configure packages
print_step "Installing essentials..."
install_essentials

print_step "Setting up firewall..."
setup_firewall

print_step "Adding worker user..."
add_worker_user

print_step "Installing Docker and Docker-Compose..."
install_docker

print_step "Installing and configuring ZSH..."
install_zsh

print_step "Configuring tmux..."
configure_tmux

print_step "Installing NodeJS and pnpm..."
install_node

print_step "Installing and configuring NGINX..."
install_configure_nginx

print_step "Installing and configuring Certbot..."
install_configure_certbot
