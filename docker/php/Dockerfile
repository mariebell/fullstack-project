FROM php:8.1-fpm-bullseye

# install composer
RUN curl -sS https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer

# install git
RUN apt-get update
RUN apt-get install -y git