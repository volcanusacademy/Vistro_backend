const express = require("express");
const con = require('../config')


 exports.getCustomer = async (req, res) => {
    await con.query('SELECT * FROM customermaster', (err, result) => {
         if (err) {
             throw err;
         }
         res.json(result);
     });
 };