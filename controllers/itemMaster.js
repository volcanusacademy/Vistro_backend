const express = require("express");
const con = require('../config')


 exports.getItem = async (req, res) => {
    await con.query('SELECT * FROM itemmaster', (err, result) => {
         if (err) {
             throw err;
         }                                              
         res.json(result);
     });
 };