*Setup instructions for my students:* Install both the Postgres server and the GUI client. You can interact with the Postgres server from the command line, but you may find that using a GUI client like pgAdmin is helpful at first.

If you choose to use Postgres from the command line, [use this cheatsheet](https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546) to learn new commands.

# macOS

### Server
Choose *one* of the following ways to install the Postgres server on macOS:

###### (a) App
1. [Download PostgreSQL](http://postgresapp.com/) and add to your Applications folder.
1. Open the Postgres app from your applications to start the server.

###### (b) Homebrew
1. `brew install postgresql`
1. `brew services start postgresql` or replace start with `run` if you don't want postgres to start at login


### Setup
1. Try running `psql` in the terminal. If you get an error about the command not being found, then run the following command before using PSQL:
```
export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/latest/bin
```
1. If you get an error, you may need to run `createdb` for postgres to create a default DB under your username. Try `psql` again to start postgresql cli with your username

Or login with the default user: `psql -d postgres`

To quit it, type `\q` then Enter.

### Client
Install [pgAdmin 4](https://www.pgadmin.org/download/). It's good practice to learn pgAdmin since it offers cross-platform support. Open the `.dmg` file and drag the `pgAdmin.app` to your Applications folder.


You may consider using [Postico](https://eggerapps.at/postico/), another Postgres client that's very easy to use.



# Windows

### Server
1. Open the [Postgres downloads page](https://www.postgresql.org/download/windows/) and select **Download the installer**.
1. Choose the latest Postgres version, then select **Windows x86-64** and *Download*.
1. Open up the installer and allow it to make changes on your machine.
1. Run the installer and select all default settings including the default port.

### Client
The windows client includes pgAdmin with it. Select `Start` or click the Windows key and search for **pgAdmin** to find the app.

If you somehow don't have pgAdmin installed or you have an older version installed, you can install [pgAdmin 4 here](https://www.pgadmin.org/download/).



# Ubuntu

### Server
1. `sudo apt-get install postgresql`
1. Follow [this guide](https://help.ubuntu.com/stable/serverguide/postgresql.html) for postgresql database setup on ubuntu. There are some helpful answers [here](http://stackoverflow.com/questions/18664074/getting-error-peer-authentication-failed-for-user-postgres-when-trying-to-ge), too.


# Additional Setup and Usage
#### Listening for connections
By default, Postgresql only listens to localhost. For postgresql to accept other connections besides `127.0.0.1` you must modify the postgresql config file. Sudoedit `/etc/postgresql/9.1/main/postgresql.conf` and change `listen_addresses='localhost'` either add additional addresses postgres should accept or `listen_addresses='*'` to accept all connections.

Finally, restart the server with `sudo /etc/init.d/postgresql restart`.

#### Remote connection
Use `psql -h hostname -U username -d database` to then connect remotely.


## PSQL
Here are some important commands that may save you some frustration:

- To quit psql, type `\q` then Enter.
- Every SQL command must end with a `;` in order for the command to run. If you don't enter a `;`, using Enter will carry you to the next line.
