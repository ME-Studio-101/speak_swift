## Запуск с Docker

### Локальный запуск с Docker:

```bash
# Сборка и запуск контейнера
docker-compose up -d

# Просмотр логов
docker-compose logs -f

# Остановка
docker-compose down
```

### Ручной запуск Docker:

```bash
# Сборка образа
docker build -t speak-swift .

# Запуск контейнера
docker run -d --name speak-swift-app -p 3000:80 speak-swift

# Остановка контейнера
docker stop speak-swift-app
docker rm speak-swift-app
```

## Деплой на сервер

### Автоматический деплой через GitHub Actions:

1. Загрузите код в GitHub репозиторий
2. Настройте secrets в настройках репозитория (см. `SERVER_SETUP.md`)
3. Сделайте push в ветку main/master
4. GitHub Actions автоматически развернет приложение

### Ручной деплой:

```bash
# Используйте скрипт деплоя
./deploy.sh your-server-ip your-username

# Или выполните команды вручную
docker build -t speak-swift:latest .
docker save speak-swift:latest | gzip > speak-swift.tar.gz
scp speak-swift.tar.gz user@server:/tmp/
ssh user@server "docker load < /tmp/speak-swift.tar.gz && docker run -d --name speak-swift-app --restart unless-stopped -p 80:80 speak-swift:latest"
```

Подробная инструкция по настройке сервера находится в файле `SERVER_SETUP.md`.
