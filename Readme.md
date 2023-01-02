# Commands 

- npm i - to install all dependencies. 
- npm run build - to build.
- npm run start - to start the server.

# Dev 
- npm run dev   - to start in dev mode with hot reload.
- npm i --save-dev *name* - to install a dependency and add to package.json .
# Db-Migrate

- npm run migrate create *filename* --sql-file (creates both up and down).
- npm run migrate up - db-migrate up.
- npm run migrate down - db-migrate down.

# To ignore files to git
- add files/folders to .gitignore if its regeneratable by building the project.

# env
- add env variables in the .env file.
- process.env.ENVNAME - to access env variables in .ts file.
- {"ENV" : "ENV_NAME"}- to access env variables inside .json file




# Things to do ...
- set up login routes
- set up fetch match list route
- set up prediction route
- set up calculation script
- setup authorization middleware
- setup notification for winners