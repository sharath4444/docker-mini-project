FROM httpd
LABEL This is docker demo project
MAINTAINER name sharath
COPY . /usr/local/apache2/htdocs/
EXPOSE 1234
