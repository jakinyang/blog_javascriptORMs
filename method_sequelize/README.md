# README (no, really)

## Introduction
This repo and blog post uses postgres (because I know nothing \[else\]). If you already have a different RDBMS, I would recommend following along with PostgreSQL for now, and the knowledge should transfer as the ORM libraries we cover support most of the popular RDBMS out there.

If you don't have NodeJS installed, I recommend going to their website and following their [instructions](https://nodejs.org/en/)
## Installing PostgreSQL
If you haven't already installed PostgreSQL
  1. You're going to need [PostgreSQL](https://www.postgresql.org/download/)
      * Follow the instructions on one of the options for your computer's operating system
  2. Initialise the database cluster and start the database
      * This will depend on what system you are on and what install method you used
      *  If you get lost at this point, here are some relatively recent (as of 2022) video tutorials for some operating systems to light your way:
          * [Mac](https://www.youtube.com/watch?v=wTqosS71Dc4&ab_channel=Prisma)
          * [Linux](https://www.youtube.com/watch?v=4CsTtMj6214&ab_channel=computeriseasy)
          * [Windows](https://www.youtube.com/watch?v=0n41UTkOBb0&ab_channel=GeekyScript)
## Setting up the database
  1. Go to cheese-party-api-sequelize and run 'psql'
      * Psql is an interactive terminal for PostgreSQL: a way for you to interact with the PostgreSQL database from the commandline
      * After running this command, you should see some kind of confirmation that psql is running (usually a version number and a prompt for the "help" command)

        ```sh
        > psql
        ```

  2. Create the user and database
      * If you haven't yet created the "cheesepartyhost" user then run these commands to create a user that matches our node-postgres configuration:
        ```sh
         CREATE DATABASE cheeseparty;
         CREATE USER cheesepartyhost WITH PASSWORD "cheeseforever";
         GRANT ALL PRIVILEGES ON DATABASE "cheeseparty_sequelize" TO cheesepartyhost;
        ```

      * If you have already followed along with the setup in method_pg, then you can just run this command to set up a database for sequelize:
      ```sh
      CREATE DATABASE cheeseparty_sequelize;
      GRANT ALL PRIVILEGES ON DATABASE "cheeseparty_sequelize" TO cheesepartyhost;
      ```
      * After this you should be able to connect to the 'cheeseparty_sequelize' database as 'cheesepartyhost'
          * Exit out of psql by running this command

            ```sh
            \q
            ```
  3. Connect to the cheeseparty database as the new user
      * This command may or may not prompt you for the password 'cheeseforever'
        ```sh
        > psql -U cheesepartyhost cheeseparty_sequelize
        ```

## Installing Sequelize
Navigate again to cheese-party-api-seqeuelize

The package.json file should have all of our dependencies already configured so simply run:
```sh
npm intall
```

If you're missing any dependencies, or you're installing packages individually, make sure you run all of these:

```sh
npm install --save sequelize # Sequelize
npm install --save pg pg-hstore # Postgres
npm install -g --save-dev sequelize-cli # Sequelize CLI
```

## Run the migrations and Seeds
All of the migrations, seeds, and configurations to connect to the database should be here. If you followed along with the the database setup instructions correctly, then you should be able to run these commands:
* Run the migrations
```sh
npx sequelize-cli db:migrate
```
* Run the seeds
```sh
npx sequelize-cli db:seed:all
```

## Test Run
From method_sequelize/cheese-party-api-sequelize, run this command in your CLI
  ```sh
  node exampleQuery.js
  ```
  
If it prints something like this to the console, it worked!
  ```sh
  {
    "id": 3,
    "name": "Gouda",
    "origin": "Netherlands",
    "createdAt": "2022-12-21T06:58:25.531Z",
    "updatedAt": "2022-12-21T06:58:25.531Z"
  }
  ```

## Run the Server
You can run the server by going to the root of method_pg/cheese-party-api-pg and running:
```sh
npm start
```

## Run the Front-End Application
This app has a very basic front end built with React. It is only there to display the results of using each method of querying the database.

You can start the React application by going to the root of method_pg/cheese-party and running:
```sh
npm start
```