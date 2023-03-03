// Database connection
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "curriculum",
})

// Database connection error or not

connection.connect((error)=>{
    if (error) {
        console.log('This is the error: ' + error);
        return;
    }
    console.log('All is fine. Database connection complete.')
})

module.exports = connection;