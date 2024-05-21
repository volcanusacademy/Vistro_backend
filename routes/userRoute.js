const express = require("express");
const router =express.Router();

const users = require('../controllers/user');
// const user = require('../controllers/userController');
const employee= require('../controllers/employee');
const agent = require('../controllers/agent');
const dealer = require('../controllers/dealer');
const transport = require('../controllers/transport');
const customer = require('../controllers/customer');

router.post("/add_user",users.addUser);
router.post("/login",users.loginUser);
router.get("/getAllUsers",users.getAll);
router.delete("/deleteUsers/:id",users.deleteUser);
router.put("/editUser/:id",users.editUser);

router.get("/getMaster",agent.getMaster);
router.get("/getMasterPagination",agent.agents);
router.post("/addMaster",agent.addMaster);

router.get("/getEmployee",employee.getEmployee);

router.get("/getDealer",dealer.getDealer);

router.get("/getTransport",transport.getTransport);

router.get("/getCustomer",customer.getCustomer);

module.exports = router