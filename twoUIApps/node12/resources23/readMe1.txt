https://kundan-9343.medium.com/node-js-rest-api-setup-with-docker-compose-express-and-postgres-d53fb0c77da7


level2
- nodeJs & postgres both run in docker-containers
- both of them communicate via defaultNetwork within docker
- we use Dockerfile for up_and_running the two containers
    we can also use "docker-compose.yml", but we used Dockerfile


see docker-compose.yml for postgres credentials...
to access postgres from terminal
    you have to specify hostname 10.0.54.240 explicitly..
    psql -U user44 -h 10.0.54.240 -p 35432 -d db87       (WORKS --> IP_address)
    psql -U user44 -h 127.0.0.1 -p 35432 -d db87         (WORKS --> 127.0.01)
    psql -U user44 -h localhost -p 35432 -d db87         (WORKS --> localhost)
    psql -U user44 -p 35432 -d db87         (DOESNT WORK, coz you omitted hostname)

    
---------------------------------------------------------
nodeJs  
    runs on 18090 port on hostMachine
    listens on 18090 port on dockerContainer

postgres
    runs on 35432 port on hostMachine
    runs on 5432 port on dockerContainer
---------------------------------------------------------