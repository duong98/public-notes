# MySQL setup

### installation

macOS:
`brew install mysql`

### Usage
`brew services start mysql` for launchd to start MySQL now and restart at login
OR
`mysql.server start` to start without a background service

`mysql.server stop` stops the server

`mysql.server --help` view other commands

`mysql -uroot` connects with the command-line client
