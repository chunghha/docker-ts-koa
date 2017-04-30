#!/usr/bin/env bash

docker build . -t ts-koa
docker run -i -t -p 8080:8080 ts-koa