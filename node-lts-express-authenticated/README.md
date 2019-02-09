### Node LTS + Express + JWT Shared Secret Auth

This is a basic template that will only execute if a valid jwt is passed with the request checked with shared secret level signing

Shared secret is retrieved as an openfaas secret using the env var `SECRET` as the key name. 