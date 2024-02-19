/*
 ~~ Model ~~
Contains the logical operations between the Database and Node.js: 
Specifically the Product Table
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
const getProducts = async() =>{
    // Setting a variable to save the result of the prepared statement
    const [allProducts] = await pool.query(`
    SELECT * FROM productsTable
    `); // Prepared Statement: retrives all users 
    return allProducts;
    }

// Retriving a single record by its id from the user table in mysql database
const getProduct = async(id)=> {
    // Setting a variable to save the result of the prepared statement
    const [singleProduct] = await pool.query(`
    SELECT  * FROM productsTable WHERE id = ?
    `, [id]); // Prepared Statement: retrives a single user by its ID 
    return singleProduct;
}

// Adding a new user to the table of the mysql database
const addProduct = async(name,age)=> {
    //  
    const [newProduct] = await pool.query(`
    INSERT INTO productsTable (name,age) VALUES (?,?)
    `, [name,age]); // Prepared Statement: 
    // 
        return newProduct.insertId;
}

// Adding a new user to the table of the mysql database
const  updateProduct = async(name,age,id)=>{
    //
    const [alteredProduct] = await pool.query (` 
    UPDATE productsTable SET name=?,age=? WHERE (id=?)
    `,[name,age,id]); // 
    return productUser;
    }

// Removing a user from the table of the mysql database
const deleteProduct = async(name,age)=> {
    //  
    const [deletedProduct] = await pool.query(`
    DELETE FROM usersTable WHERE (id = ?)
    `,[id]); // Prepared Statement: 
        return deletedProduct;
}

// Removing all users from the table of the mysql database
const deleteProducts = async(name,age)=> {
    //  
    const [deletedProducts] = await pool.query(`
    TRUNCATE productsTable
    `,); // Prepared Statement: 
    return deletedProducts;
}

// Test code
console.log(await getFriends());

// Exporting the function expressions for later use in the server.js and/or index.js
export {};