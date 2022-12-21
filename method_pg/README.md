# README (no, really)

## Introduction
This repo and blog post uses postgres (because I know nothing \[else\]). If you already have a different RDBMS, I would recommend following along with PostgreSQL for now, and the knowledge should transfer as the ORM libraries we cover support most of the popular RDBMS out there.

If you don't have NodeJS installed, I recommend going to their website and following their [instructions](https://nodejs.org/en/)
## Installing PostgreSQL
  1. You're going to need [PostgreSQL](https://www.postgresql.org/download/)
      * Follow the instructions on one of the options for your computer's operating system
  2. Initialise the database cluster and start the database
      * This will depend on what system you are on and what install method you used
      *  If you get lost at this point, here are some relatively recent (as of 2022) video tutorials for some operating systems to light your way:
          * [Mac](https://www.youtube.com/watch?v=wTqosS71Dc4&ab_channel=Prisma)
          * [Linux](https://www.youtube.com/watch?v=4CsTtMj6214&ab_channel=computeriseasy)
          * [Windows](https://www.youtube.com/watch?v=0n41UTkOBb0&ab_channel=GeekyScript)
## Setting up the database
  1. Go to cheese-party-api-pg and run 'psql'
      * Psql is an interactive terminal for PostgreSQL: a way for you to interact with the PostgreSQL database from the commandline
      * After running this command, you should see some kind of confirmation that psql is running (usually a version number and a prompt for the "help" command)

        ```sh
        > psql
        ```

  2. Create the user and database
      * Run these commands to create a user that matches our node-postgres configuration
        ```sh
         CREATE DATABASE cheeseparty;
         CREATE USER cheesepartyhost WITH PASSWORD "cheeseforever";
         GRANT ALL PRIVILEGES ON DATABASE "cheeseparty" TO cheesepartyhost;
        ```
      * After this you should be able to connect to the 'cheeseparty' database as 'cheesepartyhost'
          * Exit out of psql by running this command

            ```sh
            \q
            ```
  3. Connect to the cheeseparty database as the new user
      * This command may or may not prompt you for the password 'cheeseforever'
        ```sh
        > psql -U cheesepartyhost cheeseparty
        ```
  4. Run the schema and seedfiles to get your mock tables and data for your cheese party
      * The schemas and seeds are numbered in order they should be run because some of the later seeds depend on other data as their foreign keys
      * Run these commands in order in psql while connected to the cheeseparty database
        ```sh
        \i db/schema/00_cheeses.sql
        \i db/schema/01_ingredients.sql
        ...
        \i db/schema/04_cheese_categories.sql
        ```
        ```sh
        \i db/seeds/00_cheeses.sql
        \i db/seeds/01_ingredients.sql
        ...
        \i db/seeds/04_cheese_categories.sql
        ```
          * If you see errors related to the tables but the table is still created, don't worry, it's the DROP TABLE IF EXISTS command that resets the table when you run the schema commands
## Test Run
Start the server by going to the root of method_pg/cheese-party-api-pg and running:
```sh
npm start
```

Then run this command in your CLI
  ```sh
  node db/testQuery.js
  ```
  
If it prints something like this to the console, it worked!
  ```sh
  { id: 3, name: 'Gouda', origin: 'Netherlands' }
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