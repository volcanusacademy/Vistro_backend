const express = require("express");
const router =express.Router();

const user = require('../controllers/userController');

router.post("/add_user",user.addUser);
router.post("/login",user.loginUser);
router.get("/getAllUsers",user.getAll);
router.delete("/deleteUsers/:id",user.deleteUser);
router.put("/editUser/:id",user.editUser)

module.exports = router