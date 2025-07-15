# Настройка Ubuntu Server 24.04 для развертывания Speak Swift

## Обновление системы

Сначала обновим систему до последних версий:

```bash
# Обновляем список пакетов
sudo apt update

# Обновляем установленные пакеты
sudo apt upgrade -y

# Устанавливаем базовые утилиты
sudo apt install -y curl wget git unzip software-properties-common apt-transport-https ca-certificates gnupg lsb-release
```

## Установка Docker

### Шаг 1: Удаление старых версий Docker (если есть)
```bash
sudo apt remove docker docker-engine docker.io containerd runc
```

### Шаг 2: Установка Docker
```bash
# Добавляем GPG ключ Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Добавляем репозиторий Docker
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Обновляем список пакетов
sudo apt update

# Устанавливаем Docker
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Запускаем Docker
sudo systemctl start docker
sudo systemctl enable docker

# Добавляем текущего пользователя в группу docker
sudo usermod -aG docker $USER

# Проверяем установку
docker --version
```

### Шаг 3: Перезагрузка сессии
```bash
# Выйдите из системы и войдите снова, или выполните:
newgrp docker
```

## Настройка файрвола (UFW)

```bash
# Устанавливаем UFW если не установлен
sudo apt install -y ufw

# Разрешаем SSH (важно сделать это первым!)
sudo ufw allow ssh

# Разрешаем HTTP и HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Включаем файрвол
sudo ufw enable

# Проверяем статус
sudo ufw status
```

## Установка Git

```bash
# Устанавливаем Git
sudo apt install -y git

# Настраиваем Git (замените на ваши данные)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Создание директории для проекта

```bash
# Создаем директорию для проекта
sudo mkdir -p /opt/speak-swift
sudo chown $USER:$USER /opt/speak-swift

# Переходим в директорию
cd /opt/speak-swift
```

## Настройка SSH ключей (для GitHub Actions)

### Генерация SSH ключа:
```bash
# Генерируем SSH ключ
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"

# Запускаем ssh-agent
eval "$(ssh-agent -s)"

# Добавляем ключ в ssh-agent
ssh-add ~/.ssh/id_rsa

# Показываем публичный ключ (добавьте его в GitHub)
cat ~/.ssh/id_rsa.pub
```

### Добавление ключа на сервер:
```bash
# Копируем публичный ключ в authorized_keys
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys

# Устанавливаем правильные права
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

## Установка дополнительных утилит

```bash
# Устанавливаем htop для мониторинга
sudo apt install -y htop

# Устанавливаем tree для просмотра структуры директорий
sudo apt install -y tree

# Устанавливаем nginx (может понадобиться для прокси)
sudo apt install -y nginx
```

## Настройка домена (опционально)

Если у вас есть домен, настройте DNS записи:
- A запись: `@` → IP вашего сервера
- A запись: `www` → IP вашего сервера

## Установка SSL сертификата (опционально)

### Установка Certbot:
```bash
# Устанавливаем snapd (если не установлен)
sudo apt install -y snapd

# Устанавливаем Certbot
sudo snap install --classic certbot

# Создаем символическую ссылку
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

### Получение SSL сертификата:
```bash
# После настройки домена
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Проверка установки

```bash
# Проверяем Docker
docker --version
docker run hello-world

# Проверяем Git
git --version

# Проверяем доступность портов
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :443

# Проверяем статус сервисов
sudo systemctl status docker
sudo systemctl status ufw
```

## Первый деплой

### Клонирование репозитория:
```bash
cd /opt/speak-swift
git clone https://github.com/your-username/your-repo.git .
```

### Сборка и запуск:
```bash
# Собираем Docker образ
docker build -t speak-swift:latest -f ci_cd/Dockerfile .

# Запускаем контейнер
docker run -d \
  --name speak-swift-app \
  --restart unless-stopped \
  -p 80:80 \
  speak-swift:latest

# Проверяем статус
docker ps
docker logs speak-swift-app
```

## Полезные команды

```bash
# Просмотр логов контейнера
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

# Очистка неиспользуемых образов
docker image prune -f

# Просмотр всех контейнеров
docker ps -a

# Просмотр всех образов
docker images
```

## Мониторинг системы

```bash
# Просмотр использования CPU и памяти
htop

# Просмотр дискового пространства
df -h

# Просмотр использования памяти
free -h

# Просмотр активных соединений
sudo netstat -tlnp
```

## Резервное копирование

```bash
# Создание бэкапа контейнера
docker commit speak-swift-app speak-swift-backup

# Сохранение образа в файл
docker save speak-swift-backup | gzip > speak-swift-backup.tar.gz

# Восстановление из бэкапа
docker load < speak-swift-backup.tar.gz
```

## Обновление системы

```bash
# Регулярное обновление
sudo apt update && sudo apt upgrade -y

# Обновление Docker
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io
```

## Безопасность

```bash
# Регулярная проверка обновлений безопасности
sudo apt update
sudo apt list --upgradable

# Проверка открытых портов
sudo netstat -tlnp

# Проверка статуса файрвола
sudo ufw status
```

После выполнения всех шагов ваш сервер будет готов к развертыванию приложения! 