# Practice
- [PG Exercises](https://pgexercises.com/) ([discussion](https://news.ycombinator.com/item?id=15859849))

# Notes

## `psql` commands
-- `\c` database, `\l` - list databases, `\dt` table, `\d+` table,

## DATABASES
Normalized = without duplication

### SELECT
`select` constrains columns, `where` constrains records.

novelty = creating fresh data (user signs up);
update = delete, change;
mutable vs inmutable data, changeable vs not changeable

## 13 rules of relational database
1. values (primitive) on tables
2. value => table + key (row) + column
3. null values
5. comprehensive language

- functions: `count()`, `sum()`, `max()`
- count excludes null per column, so use *
- `like` = estimation qualities from a where clause
- in (enumeration)
- `where column in( #, #)` qualities in the column;
- `order by random()` ...idk
- `limit 2`;


### JOIN
relationships
one: many

##### Primary Key
foreign key = reference to primary key on parent table

join parent's primary key to the child's foreign key
dot notation to specify table.column

-- `group by` = group multiple records into one, two represent counts typically
```sql
select Artist.Name, count(*) AS Album_Count
from Artist
join Album on Album.ArtistId = Artist.ArtistId
group by Artist.Name
having Album_Count > 1
order by Album_Count desc;
```

`having` = limits the `group by`

subquery: select inside of select

`JOINS` are better than subqueries


# Run

### Create Table
```sql
CREATE TABLE injuries -- call table name
(
  id INTEGER PRIMARY KEY, -- id structure = id SERIAL PRIMARY KEY autoincrements;
  name VARCHAR(40),
  description TEXT,
  nums INTEGER
);
```

### Insert
```sql
INSERT INTO person (name, age, height, city, FavoriteColor) VALUES ('joe', 23, 72, 'slc', 'blue');
```

### Delete Table
```sql
DROP TABLE injuries;
```

### Update
```sql
UPDATE table SET column = value, column2 = value2 WHERE condition;
```

### Delete row
```sql
DELETE FROM table WHERE column = value;
```
