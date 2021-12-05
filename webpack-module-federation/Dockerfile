# alpine + nginx + node
FROM hydrock/frontend:v2

# Создать директорию app
WORKDIR /app

# Скопировать все файлы
COPY . /app

# контейнер должен слушать эти порты
EXPOSE 443/tcp 80/tcp 3000/tcp

# Запуск сервера
ENTRYPOINT ["node", "index.js"]
