# Инструкция по настройке сервера

## Требования к серверу

- Ubuntu 20.04+ или CentOS 8+
- Минимум 1GB RAM
- Минимум 10GB свободного места
- Открытый порт 80 (HTTP) и 443 (HTTPS)

## Шаг 1: Установка Docker

### Ubuntu/Debian:
```bash
# Обновляем пакеты
sudo apt update

# Устанавливаем необходимые пакеты
sudo apt install -y apt-transport-https ca-certificates curl gnupg lsb-release

# Добавляем GPG ключ Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Добавляем репозиторий Docker
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Устанавливаем Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io

# Добавляем пользователя в группу docker
sudo usermod -aG docker $USER

# Запускаем Docker
sudo systemctl start docker
sudo systemctl enable docker
```

### CentOS/RHEL:
```bash
# Устанавливаем необходимые пакеты
sudo yum install -y yum-utils

# Добавляем репозиторий Docker
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

# Устанавливаем Docker
sudo yum install -y docker-ce docker-ce-cli containerd.io

# Запускаем Docker
sudo systemctl start docker
sudo systemctl enable docker

# Добавляем пользователя в группу docker
sudo usermod -aG docker $USER
```

## Шаг 2: Настройка файрвола

### Ubuntu (ufw):
```bash
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

### CentOS (firewalld):
```bash
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

## Шаг 3: Настройка домена (опционально)

Если у вас есть домен, настройте DNS записи:
- A запись: `@` → IP вашего сервера
- A запись: `www` → IP вашего сервера

## Шаг 4: Настройка SSL (опционально)

### Установка Certbot:
```bash
# Ubuntu
sudo apt install -y certbot

# CentOS
sudo yum install -y certbot
```

### Получение SSL сертификата:
```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Шаг 5: Настройка GitHub Secrets

В настройках вашего GitHub репозитория добавьте следующие secrets:

1. `SERVER_HOST` - IP адрес вашего сервера
2. `SERVER_USER` - имя пользователя на сервере (обычно root)
3. `SERVER_SSH_KEY` - приватный SSH ключ для доступа к серверу
4. `SERVER_PORT` - порт SSH (обычно 22)

### Генерация SSH ключа:
```bash
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
```

### Добавление публичного ключа на сервер:
```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub user@your-server-ip
```

## Шаг 6: Первый деплой

### Автоматический деплой через GitHub Actions:
1. Загрузите код в GitHub репозиторий
2. Настройте secrets в настройках репозитория
3. Сделайте push в ветку main/master
4. GitHub Actions автоматически развернет приложение

### Ручной деплой:
```bash
# Клонируйте репозиторий на сервер
git clone https://github.com/your-username/your-repo.git /opt/speak-swift
cd /opt/speak-swift

# Соберите и запустите контейнер
docker build -t speak-swift:latest -f ci_cd/Dockerfile .
docker run -d --name speak-swift-app --restart unless-stopped -p 80:80 speak-swift:latest
```

## Шаг 7: Проверка работы

После деплоя проверьте:
1. Доступность сайта: `http://your-server-ip`
2. Логи контейнера: `docker logs speak-swift-app`
3. Статус контейнера: `docker ps`

## Полезные команды

```bash
# Просмотр логов
docker logs speak-swift-app

# Остановка контейнера
docker stop speak-swift-app

# Запуск контейнера
docker start speak-swift-app

# Перезапуск контейнера
docker restart speak-swift-app

# Удаление контейнера
docker rm speak-swift-app

# Просмотр использования ресурсов
docker stats speak-swift-app
```

## Мониторинг

Рекомендуется настроить мониторинг:
- Логирование в файл или внешнюю систему
- Мониторинг доступности сайта
- Алерты при падении сервиса 