const express = require("express");
const con = require('../config')

exports.getMasterSetting = async (req, res) => {
    const codeType = req.query.codetype;

    // If no codeType is provided, fetch all data
    if (!codeType) {
        const query = `SELECT PRIMENAME, SEQUENCE FROM master`;
        con.query(query, (error, results) => {
            if (error) {
                return res.status(500).send({
                    message: "Error retrieving data",
                    error: error.message
                });
            }

            res.send(results);
        });
    } else {
        // Validate codeType and proceed with fetching data
        // const validCodeTypes = [
        //     'brand', 'colour', 'product', 'category', 'size', 'units', 'city', 'state', 'country', 'material',
        //     'district', 'buyer', 'section', 'style', 'company', 'SColor', 'sub category', 'group', 'sub group',
        //     'season', 'gender', 'location', 'bank name', 'packing', 'reason of return'
        // ];

        // if (!validCodeTypes.includes(codeType)) {
        //     return res.status(400).send({
        //         message: "Invalid CODETYPE value."
        //     });
        // }

        const query = `SELECT PRIMENAME, SEQUENCE FROM master WHERE CODETYPE = ?`;

        con.query(query, [codeType], (error, results) => {
            if (error) {
                return res.status(500).send({
                    message: "Error retrieving data",
                    error: error.message
                });
            }

            res.send(results);
        });
    }
}
