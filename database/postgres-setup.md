# macOS
Setup instructions for my students:

### Install the database server
1. `brew install postgresql`
2. `brew services start postgresql`

Check if it worked: `psql -d postgres`
You should see something like:
```
psql (9.5.3)
Type "help" for help.

postgres=#
```

To quit it, type `\q` then Enter.

# Ubuntu

Follow [this guide](https://help.ubuntu.com/stable/serverguide/postgresql.html) for postgresql database setup on ubuntu. There are some helpful answers [here](http://stackoverflow.com/questions/18664074/getting-error-peer-authentication-failed-for-user-postgres-when-trying-to-ge), too.

## Listening for connections
By default, Postgresql only listens to localhost. For postgresql to accept other connections besides `127.0.0.1` you must modify the postgresql config file. Sudoedit `/etc/postgresql/9.1/main/postgresql.conf` and change `listen_addresses='localhost'` either add additional addresses postgres should accept or `listen_addresses='*'` to accept all connections. Finally, restart the server with `sudo /etc/init.d/postgresql restart`.

Use `psql -h hostname -U username -d database` to then connect remotely.
