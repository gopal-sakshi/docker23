docker container -- attach shell

mysql --host=localhost --user=user --password=1258 db
show databases;             <!-- show list of databases -->
use db23;                   <!-- use db23 -->
select database();          <!-- to know the curent db -->
show tables();  (or)    show tables;        <!-- varies based on MySQL version -->
select * from realmadrid11;
quit

```sql
CREATE TABLE realmadrid11 (
    id integer not null AUTO_INCREMENT,
    player_name VARCHAR(100),
    position23 TEXT,
    country23 CHAR(200),
    primary key (id)            --- this is important if using auto_increment
);
ALTER TABLE realmadrid11 AUTO_INCREMENT=101;

INSERT INTO realmadrid11 (player_name, position23, country23)
VALUES 
('modric', 'midfield', 'croatia'),
('benzema', 'striker', 'france'),
('kroos', 'midfielder', 'germany'),
('ramos', 'Defender', 'spain');
```


docker cp Desktop/world.sql containers23-mysql23-1:/tmp/

mysql --user=user --password=1258       <!-- running into permissions issue -->
mysql -u root -p                        <!-- try this, password = 1258 -->
    show databases();
    use mysql;
    select user from mysql.user;
clear screen        Ctrl + L


create database world23;            <!-- create database for dao in simpleExpressTypescript -->

<!-- pg_dump that MySQL can understand -->
pg_dump -U postgres -h localhost -d world23 --data-only --no-owner --no-acl --attribute-inserts --disable-dollar-quoting --no-tablespaces > world23_ss.sql


mysql -u root -p world23 < file23.sql


<!-- --------------------------------------------------------------------- -------->


UPDATE cities SET name=concat(name,'__mysql23') WHERE state_id = 4028 and country_id = 101;
<!-- --------------------------------------------------------------------- -------->
