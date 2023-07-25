pgen:
	npx prisma generate --schema=./src/infra/schema.prisma

pmu:
	npx prisma migrate dev --schema=./src/infra/schema.prisma

remove_mysql:
	docker rm -f node_mysql

create_mysql:
	docker run --name node_mysql -p 3456:3306 -e MYSQL_ROOT_PASSWORD=mypassword -v ${PWD}/../dbdata:/var/lib/mysql -d mysql:8

create_db:
	docker exec -i node_mysql mysql -u root -pmypassword <<< 'create database node_app_db'