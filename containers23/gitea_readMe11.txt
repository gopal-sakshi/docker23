make user "gitea" folder is owned by git (uid 130)
sudo chown -R git:git gitea23

/home will have 2 users ---> git & gopal (coz, we created git user)
==============================================================
LOGIN details
- gopal612@gmail.com, 06xxxxxx8
- ped@gmail.com as gopalDev1
- gop@outlook.com as gopalDev2

==============================================================
- db:25432              didnt work; 
- pgGitea:25432         didnt work
- pgGitea:5432          WORKED
bcoz gitea & pgGitea are both in same network, we can directly use
pgGitea container's name as hostname & pgGitea container's postgres running port
which translates to 
Gitea service will have access to and be accessible on "giteaNet23"

==============================================================

BACKUP
- $(docker ps -qf "name=containers23-gitea23-1") ----> returns containerId23
- docker exec -u git -it -w /tmp 7ee86aae6706 bash -c '/usr/local/bin/gitea dump -c /data/gitea/conf/app.ini'
- in the tmp folder in docker container, its created ---> "gitea-dump-1709920390.zip"

RESTORE
- copy zip file to desired location
- docker exec --user git -it 2a83b293548e bash
- unzip gitea-dump-1610949662.zip
- cd gitea-dump-1610949662
- mv data/* /data/gitea
- mv repos/* /data/git/gitea-repositories/
- chown -R git:git /data
- /usr/local/bin/gitea -c '/data/gitea/conf/app.ini' admin regenerate hooks
==============================================================