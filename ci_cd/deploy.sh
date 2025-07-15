#!/bin/bash

# Скрипт для деплоя на сервер
# Использование: ./deploy.sh [SERVER_HOST] [SERVER_USER]

SERVER_HOST=${1:-"your-server-ip"}
SERVER_USER=${2:-"root"}
SERVER_PORT=${3:-"22"}

echo "🚀 Начинаем деплой на сервер $SERVER_HOST..."

# Собираем Docker образ
echo "📦 Собираем Docker образ..."
docker build -t speak-swift:latest -f ci_cd/Dockerfile .

# Сохраняем образ в tar файл
echo "💾 Сохраняем образ..."
docker save speak-swift:latest | gzip > speak-swift.tar.gz

# Копируем образ на сервер
echo "📤 Копируем образ на сервер..."
scp -P $SERVER_PORT speak-swift.tar.gz $SERVER_USER@$SERVER_HOST:/tmp/

# Выполняем деплой на сервере
echo "🔧 Выполняем деплой на сервере..."
ssh -p $SERVER_PORT $SERVER_USER@$SERVER_HOST << 'EOF'
    # Останавливаем старый контейнер
    docker stop speak-swift-app || true
    docker rm speak-swift-app || true
    
    # Удаляем старый образ
    docker rmi speak-swift:latest || true
    
    # Загружаем новый образ
    docker load < /tmp/speak-swift.tar.gz
    
    # Запускаем новый контейнер
    docker run -d \
      --name speak-swift-app \
      --restart unless-stopped \
      -p 80:80 \
      speak-swift:latest
    
    # Очищаем временные файлы
    rm /tmp/speak-swift.tar.gz
    
    # Очищаем неиспользуемые образы
    docker image prune -f
    
    echo "✅ Деплой завершен успешно!"
    echo "🌐 Приложение доступно по адресу: http://$(hostname -I | awk '{print $1}')"
EOF

# Очищаем локальные файлы
rm speak-swift.tar.gz

echo "🎉 Деплой завершен!" 