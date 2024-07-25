# Hub Backend

## Description

This is the backend repository of [Hub Entertainment Mega](https://github.com/Jonhy-D/hub-entertainment-mega), its main function is the storage of the web application.

## Technical requirements

This project was generated Node JS, MSSQL, Express, Dotenv and Javascript.

## How to install the project

### First Step: 

You need to have node.js, run the following command: `node --version` and npm installed, confirm that the version number displayed meets the requirements.

### Second Step: 

Remember that after downloading or cloning the project you must stop at your project in the terminal and run: `npm install`

### Third Step:

You need to create a file .env with the next requirements:
```
DB_USER = "Put here database user"
DB_PASSWORD = "Put here database password".
DB_SERVER = "Put here database server name"
DB_DATABASE = "Put here database name"
DB_PORT = "Put here data base PORT"
BC_PORT = "Put here Backend server PORT"
```

### Final Step

Run `node index.js --watch` for a server Navigate to localhost and the PORT that you will put in the BC_PORT.

# Sprint 4

### Goals

- Implement T-SQL database in Entertainment HUB project.
- Create Entity-Relationship Diagram.

## Entity-Relationship Diagram

This is the entity relationship diagram of the hub entertainment mega project database according to my point of view.

![Entity-Relationship Diagram Image](/public/Entity-Relationship.webp)

## Process

- First I created the tables that were the main ones that were users, movies and series. 
- After having created those tables to be able to store those items, then I had to see the functions of my application to be able to make the other tables that are the user's favorites and Since in MySQL there are relationship tables.
- I had to think about how the user relates to those tables and thus create the other tables of favorite movies and favorite series.