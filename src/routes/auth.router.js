const express = require("express");
const authController = require("../controllers/auth.controller");
const authRouter = express.Router();

authRouter.post("/signUp", authController.signUp);
authRouter.post("/signIn", authController.signIn);

module.exports = { authRouter };
