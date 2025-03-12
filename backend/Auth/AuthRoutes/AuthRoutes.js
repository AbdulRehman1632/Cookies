import express from "express";
import { LoginController, LogoutController, RegisterController } from "../AuthController/AuthController.js";

const AuthRoutes = express.Router();

AuthRoutes.post("/signup" ,RegisterController);
AuthRoutes.post("/login", LoginController);
AuthRoutes.post("/logout", LogoutController);

export default AuthRoutes;
