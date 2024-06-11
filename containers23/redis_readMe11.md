https://redis.io/docs/latest/operate/oss_and_stack/install/install-stack/docker/

redis/redis-stack
- contains both <redis stack server> and <redis insight>

redis/redis-stack-server
- provides <redis stack server> only

========================================================

working with redis-node
social network application - users, locations, checkins

apart from normal redis
it also needs redis search
for which, we need redis stack

so, redis23 container alone wont do
thats why we are using <redis/redis-stack-server>

========================================================

Redis Stack 
- bundles the following capabilities into Redis
    RedisJSON
    RediSearch
    RedisTimeSeries
    RedisBloom.

========================================================

`Persistence`
- If nothing is specified (default settings)
    redis image ============> data is persisted if volume/bind_mount directory is provided
    redis-stack image ======> data is lost every time docker container is restarted

- for redis
    command: ["redis-server", "--save", "3600", "1", "300", "100", "60", "10000"]
    to override/modify default settings provide here

- for redis-stack
    environment: 
    - REDIS_ARGS = --save 3600 1 300 100 60 10000
    <!-- Save after 3600sec if 1 write, 
        after 300sec if 100 writes, 
        after 60 sec if 10000 writes 
    -->
- (or) alternatively you can specify redis.conf file
- to see the present save settings ===> CONFIG GET save

see redis23_node/resources/persistence23.md for more details
https://redis.io/docs/latest/operate/oss_and_stack/install/install-stack/docker/