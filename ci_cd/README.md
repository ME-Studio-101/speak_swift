# CI/CD настройки для Speak Swift

Эта папка содержит все файлы для автоматического развертывания приложения на сервер.

## Структура файлов

- `Dockerfile` - конфигурация Docker контейнера
- `nginx.conf` - конфигурация Nginx сервера
- `docker-compose.yml` - для локального тестирования
- `deploy.sh` - скрипт для ручного деплоя
- `SERVER_SETUP.md` - инструкция по настройке сервера
- `.github/workflows/deploy.yml` - GitHub Actions для автоматического деплоя

## Локальное тестирование

### Запуск с Docker Compose:
```bash
# Из корня проекта
docker-compose -f ci_cd/docker-compose.yml up -d

# Просмотр логов
docker-compose -f ci_cd/docker-compose.yml logs -f

# Остановка
docker-compose -f ci_cd/docker-compose.yml down
```

### Ручной запуск Docker:
```bash
# Из корня проекта
docker build -t speak-swift -f ci_cd/Dockerfile .
docker run -d --name speak-swift-app -p 3000:80 speak-swift
```

## Деплой на сервер

### Автоматический деплой:
1. Настройте GitHub Secrets (см. `SERVER_SETUP.md`)
2. Сделайте push в ветку `main`
3. GitHub Actions автоматически развернет приложение

### Ручной деплой:
```bash
# Из корня проекта
./ci_cd/deploy.sh your-server-ip your-username
```

## Настройка сервера

Подробная инструкция по настройке сервера находится в файле `SERVER_SETUP.md`.

## Важные замечания

- Все Docker команды должны выполняться из корня проекта
- GitHub Actions workflow находится в `.github/workflows/` в корне проекта
- Контекст сборки Docker - корень проекта, а не папка `ci_cd` 