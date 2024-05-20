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