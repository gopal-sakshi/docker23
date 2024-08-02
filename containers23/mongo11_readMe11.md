docker container attach shell

## connect
mongosh         <!-- mongo is removed from MongoDB 6.0 -->
db.version()    <!-- shows current mongo version 7.0.6  -->
show dbs        <!-- list all databases --->
exit

other commands find in 
learnings/database_stuff/mongoDB/queries

Failed to unlink socket file        /tmp/mongodb-27017.sock 
error       Operation not permitted
Solution:
    Most probably you missed to shutdown properly your mongod previous time
    so there is socket file left in the tmp folder that you need to remove manually
    before you try to start the mongod process again:
rm /tmp/mongodb-27017.sock


sometimes do this
docker compose down
docker compose up -d
this fixes broken containers --> but you'll loose data in the containers that is not saved/mapped/bound