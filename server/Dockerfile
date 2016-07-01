FROM tomcat:latest

MAINTAINER "Thomas Bonavia <thomas.bonavia@gmail.com>"

ADD tomcat-docker/tomcat-users.xml /usr/local/tomcat/conf
COPY ./target/server-1.0-SNAPSHOT.war /usr/local/tomcat/webapps/hello.war

#CMD ["catalina.sh", "run"]
#COPY pom.xml /tmp/pom.xml
#RUN cat /tmp/pom.xml