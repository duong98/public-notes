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

```
sudo apt-get install -y postgresql postgresql-contrib libpq-dev build-essential
echo `whoami` > /tmp/caller
sudo su - postgres
psql --command "CREATE ROLE `cat /tmp/caller` LOGIN createdb;"
exit
rm -f /tmp/caller
```
