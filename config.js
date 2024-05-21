<<<<<<< HEAD
const mysql = require("mysql");

const con = mysql.createConnection({
    host:"4.213.43.18",
    port:"3306",
    user: "isrbs",
    password: "sbrsi1209ISOFT",
    database: "madhuban"
});

con.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log("Connected to MySQL!");
    }
});


module.exports= con;
=======
const mysql = require('mysql');


const dbConfig = {
          host: 'localhost',
          port: '3306',
          user: 'root',
          password: 'Fxbytes**22',
          database: 'isrbs'
};


const pool = mysql.createPool(dbConfig);


pool.getConnection((err, connection) => {
          if (err) {
                      console.error('Error connecting to database:', err.message);
                    } else {
                                console.log('Connected to database!');
                                connection.release(); // Release the connection
                              }
});
>>>>>>> 029e413cc623ca2f0592656d458f460e061c5e51
