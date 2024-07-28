# Hub Backend

## Description

This is the backend repository of [Hub Entertainment Mega](https://github.com/Jonhy-D/hub-entertainment-mega), its main function is the storage of the web application.

## Technical requirements

This project was generated with Node JS, T-SQL and Javascript, dependencies are MSSQL, Express, Dotenv.

## How to install the project

### First Step: 

You need to have node.js, run the following command: `node --version` and npm installed, confirm that the version number displayed meets the requirements.

### Second Step: 

Clone repository with this command:
` git clone "URL repository"`
Remember that after downloading or cloning the project you must stop at your project in the terminal and run: `npm install` to download your project's dependencies.

### Third Step:

You need to create a file **.env** with the next requirements in the root of the project:
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

### Remember need a database

The database is in the file called **HubEnterntainment.dacpac**

# Sprint 4

### Goals

- Implement T-SQL database in Entertainment HUB project.
- Create Entity-Relationship Diagram.
- Connecting the frontend to the backend by consuming the database.

## Entity-Relationship Diagram

This is the entity relationship diagram of the hub entertainment mega project database according to my point of view.

![Entity-Relationship Diagram Image](/public/Entity-Relationship.webp)

## Process

- First I created the tables that were the main ones that were users, movies and series. 
- After having created those tables to be able to store those items, then I had to see the functions of my application to be able to make the other tables that are the user's favorites and Since in MySQL there are relationship tables.
- I had to think about how the user relates to those tables and thus create the other tables of favorite movies and favorite series.
- The next step was to create the backend, which is only a provisional backend because we will implement a different one with a different technology. The different endpoints were created so that they could be consumed from the frontend.
- The last thing I did in this sprint was to create the user login but I had a problem with the redirects and being able to make a registration.
- Create a cookie so that the login is saved for 3 days so that the session is not lost.

#### Diferents endpoints
This endpoint is for creating users.

`POST /users` 

This endpoint is to verify that the user exists.

`POST /auth `

This endpoint is to get all the stored movies

`GET /movies`

This endpoint is to get all the stored series

`GET /series`

This endpoint is to add to the user's favorite movies section

`POST /addFavMov`

This endpoint is to add to the user's favorite series section

`POST /addFavSer`

## Issues

- My first problem was connect to the database with my backend application, because When I tried to connect the server send to me an alert with the code error but I don't know how to fix this error.
- After that error, many errors of different types began to appear.
- The biggest error that took me a long time to find was because my database could not connect to my backend and it was because I was not getting some error code that was in problem forums but in the end it was a problem with the TCP protocols of SQL Server Management.
- Another error that I couldn't solve was a problem with how to store a variable that comes from the response of the POST request in order to use it in a different component, and that was one of the ones I had the most problems with and couldn't solve in order to make my favorites section work because I needed that value to be able to make the query.

## Table Sprint Review

| **What was done well?** | **What can I do differently?** | **What didn't go well?** |
------------------|----------------------------|-----------------------
| In this sprint I think there were few things that went well because I had to do a lot of research. But the main thing that went well was the creation of the database with T-SQL and the creation of the entity relationship diagram. | In this sprint I think what I needed most was to be able to ask my questions in private sessions because I feel that there is not enough time to be able to help with errors and communication. | The implementation of connecting my database with my application was quite tiring because many errors came up that I had never seen before, but the good thing was that in the session they gave many tips to get out of the hole. |