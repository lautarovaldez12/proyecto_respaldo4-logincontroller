const express = require("express");
const router = express.Router();
const {login, loginProcess} = require("../controllers/loginController");
const loginValidator = require('../validations/loginValidation');

router.get("/", login);
router.post("/", loginValidator,loginProcess);

module.exports = router