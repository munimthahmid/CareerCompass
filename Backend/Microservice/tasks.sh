#!/bin/bash

MVNW="./mvnw"
DC_DIR="deployment/docker-compose"
INFRA_DC_FILE="$DC_DIR/infra.yml"
APPS_DC_FILE="$DC_DIR/apps.yml"

default() {
  test
}

test() {
  format
  $MVNW clean verify
}

format() {
  $MVNW spotless:apply
}

build() {
  $MVNW -pl user_service spring-boot:build-image -DskipTests
}

start_infra() {
  docker compose -f $INFRA_DC_FILE up -d
}

stop_infra() {
  docker compose -f $INFRA_DC_FILE stop
  docker compose -f $INFRA_DC_FILE rm -f
}

restart_infra() {
  stop_infra
  sleep
  start_infra
}

start() {
  build
  docker compose -f $INFRA_DC_FILE -f $APPS_DC_FILE up -d
}

stop() {
  docker compose -f $INFRA_DC_FILE -f $APPS_DC_FILE stop
  docker compose -f $INFRA_DC_FILE -f $APPS_DC_FILE rm -f
}

restart() {
  stop
  sleep
  start
}

sleep_task() {
  local DURATION="${1:-5}"
  sleep $DURATION
}

# Check if the script is being sourced or executed
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
  if [[ $# -eq 0 ]]; then
    echo "No task specified. Available tasks: default, test, format, build, start_infra, stop_infra, restart_infra, sleep_task"
    exit 1
  fi

  TASK=$1
  shift
  $TASK "$@"
fi
