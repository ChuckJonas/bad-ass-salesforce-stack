# Trusting Localhost

For cases where you cannot `Allow Insecure Localhost` (or aren't using chrome):

1. run `openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 -nodes -keyout ./config/cert/server.key -out ./config/cert/server.crt -extensions san -config ./config/cert/dev.conf`
2. in "package.json" update the  `npm start` with `--cert ./config/cert/server.crt --key ./config/cert/server.key`
3. install the newly created cert `config/cert/server.crt` in [keychain and set trust to "Always"](https://www.youtube.com/watch?v=TGrX8XgSuZ4)