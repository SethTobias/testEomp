/*
 ~~ Controller ~~
Contains the logical operations of the application:
Including the HTTP methods and the coordinating the flow of data
*/

// Import the express Librairy/Framework
import express from "express";\
// Import the dotenv Librairy/Framework
import { config } from "dotenv";
// Setup of config data from dotenv file
config();
// Import the cors Librairy/Framework
import cors from "cors";


// Import of the routes from the routes folder
import friendsRouter from "./routes/friends.js"


// Declaration of variable stroing the PORT number from the .env file
const PORT = process.env.PORT;
// Declaration of app to use the express framework/ Inistilisation of Server
const app = express();
// 
app.use(cors());
// 
app.use(express.json());
// 
app.use(express.static("public"));


// 
app.use('/friends',friendsRouter)



// Hosting of server at certain PORT number
app.listen(PORT, () => {
  console.log(`This server is running at Port: http://localhost:${PORT}`);
});
