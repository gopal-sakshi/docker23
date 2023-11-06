HOW TO RUN
- run both UI apps ('npm run start' in respective folders)
- docker compose up -d
-------------------------------------------------------------------------
I have two UI applications
    dockerUI12
    dockerUI13 
Both running on 54321, 54322 ports
In ng serve ---> host is 0.0.0.0
bcoz, these UI apps can be accessed in either way 
    localhost:54321
    10.0.54.240:54321
-------------------------------------------------------------------------

I have nginx.conf (see node12 folder)
It listens on two ports ---> 6001, 6002
    6001 port serves whatever is on ----> http://10.0.54.240:54321; (which is UI app - dockerUI12)
    6002 port serves whatever is on ----> http://10.0.54.240:54322; (which is UI app - dockerUI13)
We started a docker container (nginx image)
this docker container maps two ports --> 42457 & 42458 
    listening on 6001 & 6002 ports respectively.
    ports:
      - 42457:6001
      - 42458:6002
    so, if you access localhost:42457 ----->
        it connects to nginxDockerContainer's port 6001
        which connects to dockerUI12 app

    http://10.0.54.240:42458/
    localhost:42458                     // both of the works

    http://10.0.54.240:54322/           // WiLL NoT wOrK
-------------------------------------------------------------------------