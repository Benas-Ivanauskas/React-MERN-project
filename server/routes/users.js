import { Router } from "express";
import * as userController from "../controller/userController.js";


const router = Router();


//Signup
router.post("/signup", userController.create_user);
//Login
router.post("/login", userController.login_user);
//Admin
router.post("/admin", userController.create_admin);

export default router;
