// const express = require("express");
// const con = require('../config')


//  exports.getcmb = async (req, res) => {
//     const data = req.params.id;
//     const arr = data.split(",")
//     // console.log(data.toString());
//     console.log(arr);
//     // console.log(data.name)
//     // SELECT PRIMENAME, SEQUENCE FROM master WHERE CODETYPE = ?
//     await con.query("SELECT PRIMENAME, PRIMEKEYID FROM master WHERE Codetype = 'Status' Order by SEQUENCE, PRIMENAME", (err, result) => {
//          if (err) {
//              throw err;
//          }                                              
//          res.json(result);
//      });
//  };
const express = require("express");
const con = require('../config')


 exports.postcmb = async (req, res) => {
   
    const {WhFldName,FldName,TblName,FldCode,OrdBy} = req.body
    console.log(WhFldName,FldName,TblName,FldCode,OrdBy);
    // console.log(data.name)
    // SELECT PRIMENAME, SEQUENCE FROM master WHERE CODETYPE = ?
    await con.query(`SELECT ${FldName}, ${FldCode} FROM ${TblName} WHERE Codetype = '${WhFldName}' Order by '${OrdBy}', '${FldName}'`, (err, result) => {
         if (err) {
             throw err;
         }                                              
         res.json(result);
     });
 };

 exports.postcmbSW = async (req, res) => {
   
    const {WhFldName,FldName,TblName,FldCode,OrdBy} = req.body
    console.log(WhFldName,FldName,TblName,FldCode,OrdBy);
    // console.log(data.name)
    // SELECT PRIMENAME, SEQUENCE FROM master WHERE CODETYPE = ?
    await con.query(`SELECT ${FldName}, ${FldCode} FROM ${TblName} WHERE Codetype = '${WhFldName}' Order by '${OrdBy}', '${FldName}'`, (err, result) => {
         if (err) {
             throw err;
         }                                              
         res.json(result);
     });
 };
 exports.postcmbAW = async (req, res) => {
    const {TblName,FldName,FldCode,OrdBy,WhFldName,} = req.body
    await con.query(`SELECT ${FldName}, ${FldCode} FROM ${TblName} WHERE Codetype = '${WhFldName}' Order by '${OrdBy}', '${FldName}'`, (err, result) => {
         if (err) {
             throw err;
         }                                              
         res.json(result);
     });
 };