/*
 ~~ Model ~~
Contains the logical operations between the Database and Node.js:
Specifically the User Table
*/

// Import the mysql2 Libriary/Framework
import mysql from "mysql2";
// Import the dotenv Libriary/Framework
import {config} from 'dotenv';
// Setup config data from .env file
config()

// Setting signin details of the database to be imported
const pool = mysql.createPool ({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}).promise();
// .promise() ??

// Retriving all the data from the user table in mysql database
const getUsers = async() =>{
    // Setting a variable to save the result of the prepared statement
    const [allUsers] = await pool.query(`
    SELECT * FROM usersTable
    `); // Prepared Statement: retrives all users 
    return allUsers;
    }

// Retriving a single record by its id from the user table in mysql database
const getUser = async(id)=> {
    // Setting a variable to save the result of the prepared statement
    const [singleUser] = await pool.query(`
    SELECT  * FROM usersTable WHERE id = ?
    `, [id]); // Prepared Statement: retrives a single user by its ID 
    return singleUser;
}

// Adding a new user to the table of the mysql database
const addUser = async(name,age)=> {
    //  
    const [newUser] = await pool.query(`
    INSERT INTO usersTable (name,age) VALUES (?,?)
    `, [name,age]); // Prepared Statement: 
    // 
        return newUser.insertId;
}

// Adding a new user to the table of the mysql database
const  updateUser = async(name,age,id)=>{
    //
    const [alteredUser] = await pool.query (` 
    UPDATE usersTable SET name=?,age=? WHERE (id=?)
    `,[name,age,id]); // 
    return alterUser;
    }

// Removing a user from the table of the mysql database
const deleteUser = async(name,age)=> {
    //  
    const [deletedUser] = await pool.query(`
    DELETE FROM usersTable WHERE (id = ?)
    `,[id]); // Prepared Statement: 
        return deletedUser;
}

// Removing all users from the table of the mysql database
const deleteUsers = async(name,age)=> {
    //  
    const [deletedUsers] = await pool.query(`
    TRUNCATE usersTable
    `,); // Prepared Statement: 
    return deletedUsers;
}

// Test code
console.log(await getFriends());

// Exporting the function expressions for later use in the server.js and/or index.js
export {};