this is postgres replication
1 master, 2 slaves

<!-- to check users -->
\du

<!-- to check replication status -->
select * from pg_stat_replication;       On master
select * from pg_stat_wal_receiver;     On slave/replica

