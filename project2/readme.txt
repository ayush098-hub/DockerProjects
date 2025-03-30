step1: docker pull postgres:latest
step2: docker run -dit --name post-cont -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres -p 5432:5432 -v postgresdata:/var/lib/postgresql/data postgres
