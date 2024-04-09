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
                                connection.release();
                              }
});