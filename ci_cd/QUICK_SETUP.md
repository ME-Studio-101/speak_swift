# Быстрая настройка Ubuntu Server 24.04

## Основные зависимости

### 1. Обновление системы
```bash
sudo apt update && sudo apt upgrade -y
```

### 2. Установка Docker
```bash
# Установка необходимых пакетов
sudo apt install -y apt-transport-https ca-certificates curl gnupg lsb-release

# Добавление репозитория Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Установка Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Запуск и настройка Docker
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
newgrp docker
```

### 3. Настройка файрвола
```bash
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

### 4. Установка Git
```bash
sudo apt install -y git
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 5. Создание директории проекта
```bash
sudo mkdir -p /opt/speak-swift
sudo chown $USER:$USER /opt/speak-swift
cd /opt/speak-swift
```

### 6. Настройка SSH ключей
```bash
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
cat ~/.ssh/id_rsa.pub  # Скопируйте этот ключ в GitHub
```

## Проверка установки
```bash
docker --version
docker run hello-world
git --version
sudo ufw status
```

## Первый деплой
```bash
cd /opt/speak-swift
git clone https://github.com/your-username/your-repo.git .
docker build -t speak-swift:latest -f ci_cd/Dockerfile .
docker run -d --name speak-swift-app --restart unless-stopped -p 80:80 speak-swift:latest
```

## Полезные команды
```bash
# Логи контейнера
docker logs speak-swift-app

# Статус контейнера
docker ps

# Остановка/запуск
docker stop speak-swift-app
docker start speak-swift-app

# Обновление
docker pull
docker build -t speak-swift:latest -f ci_cd/Dockerfile .
docker stop speak-swift-app && docker rm speak-swift-app
docker run -d --name speak-swift-app --restart unless-stopped -p 80:80 speak-swift:latest
``` 