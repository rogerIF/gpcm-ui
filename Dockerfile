FROM aliyun.docker.registry:5000/gwssi/node:8.11.2

COPY dist/ /app

WORKDIR /app

CMD ["http-server"]