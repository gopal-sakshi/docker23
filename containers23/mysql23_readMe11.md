docker container -- attach shell

mysql --host=localhost --user=user --password=1258 db
show databases;             <!-- show list of databases -->
use db23;                   <!-- use db23 -->
select database();          <!-- to know the curent db -->
show tables();
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
