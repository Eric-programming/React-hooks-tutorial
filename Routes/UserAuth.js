const express = require("express");
const {register} = require("./UserAuthCRUD");

const Router = express.Router();

Router.route("/auth/register").post(register); //Add this to the main javascript server file


module.exports = router; 
