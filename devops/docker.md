

## [Docker cheatsheet](https://github.com/wsargent/docker-cheat-sheet)

For beginners, this is the [best explanation of Docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-getting-started) I've ready. However, some of the commands and distros are dated. Use this as a [docker guide](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04) to install on Linux.

## Dockerizing Node
- [Docker and node](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
- [preferred image](https://github.com/mhart/alpine-node)
- [Docker compose guide](https://github.com/b00giZm/docker-compose-nodejs-examples/blob/master/05-nginx-express-redis-nodemon/README.md)

## Other resources
- [Docker media server](https://blog.qmo.io/the-perfect-media-server-with-docker-plex-and-automatic-bittorrent/)
- A walkthrough on setting up the [TICK stack in docker](https://denlab.io/setup-a-wicked-grafana-dashboard-to-monitor-practically-anything/)

# Commands

#### Most used
- `docker logs <container id>` read container info logs
- `docker ps -a` view all containers
- `docker stop $(docker ps -a -q)` stop all containers
- `docker rm $(docker ps -a -q)` remove all containers


#### Docker commands
```
attach    Attach to a running container
build     Build an image from a Dockerfile
commit    Create a new image from a container's changes
cp        Copy files/folders between a container and the local filesystem
create    Create a new container
diff      Inspect changes on a container's filesystem
events    Get real time events from the server
exec      Run a command in a running container
export    Export a container's filesystem as a tar archive
history   Show the history of an image
images    List images
import    Import the contents from a tarball to create a filesystem image
info      Display system-wide information
inspect   Return low-level information on a container or image
kill      Kill a running container
load      Load an image from a tar archive or STDIN
login     Log in to a Docker registry
logout    Log out from a Docker registry
logs      Fetch the logs of a container
network   Manage Docker networks
pause     Pause all processes within a container
port      List port mappings or a specific mapping for the CONTAINER
ps        List containers
pull      Pull an image or a repository from a registry
push      Push an image or a repository to a registry
rename    Rename a container
restart   Restart a container
rm        Remove one or more containers
rmi       Remove one or more images
run       Run a command in a new container
save      Save one or more images to a tar archive
search    Search the Docker Hub for images
start     Start one or more stopped containers
stats     Display a live stream of container(s) resource usage statistics
stop      Stop a running container
tag       Tag an image into a repository
top       Display the running processes of a container
unpause   Unpause all processes within a container
update    Update configuration of one or more containers
version   Show the Docker version information
volume    Manage Docker volumes
wait      Block until a container stops, then print its exit code
```
