# Этап сборки
FROM node:18-alpine as build

WORKDIR /app

# Копируем файлы зависимостей из корня проекта
COPY ../package*.json ./

# Устанавливаем зависимости
RUN npm ci --only=production

# Копируем исходный код из корня проекта
COPY .. .

# Собираем приложение
RUN npm run build

# Этап продакшена
FROM nginx:alpine

# Копируем собранное приложение в Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Копируем конфигурацию Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"] 