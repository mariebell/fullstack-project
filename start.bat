start /b /wait docker-compose up -d
start /b npm run server
start /min docker-compose exec app npm run watch-poll