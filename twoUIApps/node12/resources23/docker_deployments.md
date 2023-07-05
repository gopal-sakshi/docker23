# run from ==========> Dockerfile

docker build .                  converts your Dockerfile into an image "/var/lib/docker/overlay2"
docker create image23           creates a container from your image from step 1.
docker start container23        starts the container from step 2.
docker run image 
    shortcut for 2 & 3 ("docker create image" & "docker start container_id")   

<!-- repo name must be lowercase -->
<!-- check your image ===> docker image ls -->
`docker build -t docker_ui12_image .`         // creates an image with name "docker_ui12_image"
`docker run -dp 4333:4200 docker_ui12_image`    // run the image, starts container

<!-- ----------------------------------------------------------------------------------------- -->

# push image into dockerhub

gpg --generate-key
pass init 96C14704D8FBB275504B43A5385F6E922C3F2047
/home/gsakshi/.password-store/
docker login

docker build -t gopal612/level2_img .
docker image push gopal612/level2_img
docker image prune -a       // remove dangling/unused images
<!-- ----------------------------------------------------------------------------------------- -->
# run from =======> docker-compose.yml

docker-compose up -d            (or) 
docker-compose up --detach
docker-compose up --build --detach      // build images before starting containers
                                        // see level2/docker-compose.yml
--------------------------------------------------------------------------

use this in package.json
otherwise, angularApplication cant be accessed outside docker
ng serve --host 0.0.0.0 --port 4200