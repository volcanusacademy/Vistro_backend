const express = require("express");
const con = require('../config')

exports.addUser = async (req, res) => {

    const { id, name, email, password } = req.body;
    const newUser = { id, name, email, password }
   await con.query('INSERT INTO users SET ?', newUser, (error, result, fields) => {
        if (error) console.log(error);
        res.status(201).send({
            msg: "new user created successfully",
            newUser
        })
    });
};
exports.getAll = async (req, res) => {
   await con.query('SELECT * FROM users', (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
};

exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
    await con.query('DELETE FROM users WHERE id = ?', userId, (err, result) => {
        if (err) {
            throw err;
        }
        res.send('User deleted successfully');
    });
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

  await con.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (error, results, fields) => {
        if (error) {
            console.error(error);
            return res.status(500).send("Internal Server Error");
        }
        if (results.length === 0) {
            return res.status(401).send("Invalid email or password");
        }
        const user = results[0];
        res.status(200).send({
            msg: "Login successful",
            user
        });
    });
};

exports.editUser = async (req, res) => {
    try {
        const { id } = req.params; 
        const { name, email } = req.body; 

     
        const updatedUser = { name, email };

       
        con.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id], (error, result) => {
            if (error) {
                console.error('Error updating user:', error);
                return res.status(500).send({ error: 'Internal Server Error' });
            }

            
            if (result.affectedRows === 0) {
                return res.status(404).send({ error: 'User not found' });
            }

         
            res.status(200).send({ msg: 'User updated successfully', updatedUser });
        });
    } catch (error) {
        console.error('Error editing user:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

  exports.getMaster = async (req, res) => {
    await con.query('SELECT * FROM agentmaster', (err, result) => {
         if (err) {
             throw err;
         }
         res.json(result);
     });
 };

 exports.getDealer = async (req, res) => {
    await con.query('SELECT * FROM dealermaster', (err, result) => {
         if (err) {
             throw err;
         }
         res.json(result);
     });
 };

 exports.getTransport = async (req, res) => {
    await con.query('SELECT * FROM transportmaster', (err, result) => {
         if (err) {
             throw err;
         }
         res.json(result);
     });
 };


 exports.getCustomer = async (req, res) => {
    await con.query('SELECT * FROM customermaster', (err, result) => {
         if (err) {
             throw err;
         }
         res.json(result);
     });
 };
 // POST API endpoint to insert data into agentmaster table
exports.addMaster= async (req, res) => {
    const data = req.body;
  
    // Insert data into agentmaster table
    con.query('INSERT INTO agentmaster SET ?', data, (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Error inserting data into agentmaster table' });
        return;
      }
      console.log('Data inserted successfully:', result);
      res.status(200).json({ message: 'Data inserted successfully' });
    });
  };

 exports.agents = (req, res) => {
     const page = parseInt(req.query.page) || 1;
     const limit = parseInt(req.query.limit) || 10; // Number of records per page
     const offset = (page - 1) * limit;
 
     // Fetch total count of records
     con.query("SELECT COUNT(*) as totalCount FROM agentmaster", (error, countRows) => {
         if (error) {
             console.error('Error fetching total count of records:', error);
             res.status(500).json({ error: 'Internal Server Error' });
             return;
         }
 
         const totalCount = countRows[0].totalCount;
 
         // Fetch data with pagination
         con.query(
             `SELECT * FROM agentmaster LIMIT ? OFFSET ?`,
             [limit, offset],
             (error, rows) => {
                 if (error) {
                     console.error('Error fetching data with pagination:', error);
                     res.status(500).json({ error: 'Internal Server Error' });
                     return;
                 }
 
                 // Calculate total pages
                 const totalPages = Math.ceil(totalCount / limit);
 
                 // Send JSON response with pagination metadata
                 res.json({
                     totalRecords: totalCount,
                     totalPages: totalPages,
                     currentPage: page,
                     agents: rows
                 });
             }
         );
     });
 };
 