# fullstack-project
Docker, Laravel, React, and TypeScript.

## 起動手順
```
docker-compose up -d
docker-comopse exec app composer install
docker-compose exec app php artisan key:generate
docker-compose exec app php artisan migrate
```

## 解説記事
### 前編（バックエンド）
https://sagara.ink/article/app/204/

### 後編（フロントエンド）
https://sagara.ink/article/app/205/

## 1. Docker
### 1-1. Nginx
Nginxのコンテナを構築してブラウザでHTMLを表示するまで
### 1-2. PHP
PHPのコンテナを構築してブラウザでphpinfoを表示するまで
### 1-3. MySQL
MySQLのコンテナを構築してブラウザでPHPMyAdminを表示するまで
## 2. Laravel
### 2-1. Composer
Composerを使えるようにするまで
### 2-2. Laravel
ブラウザでLaravelの初期画面表示するまで
## 3. React
### 3-1. Node
Nodeとnpmを使えるようにするまで
### 3-2. Mix
ブラウザにReactコンポーネントを表示するまで
## 4. TypeScript
### 4-1. TypeScript
TypeScriptを使えるようにするまで
