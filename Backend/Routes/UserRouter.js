import {getAllauthors, getmyprofile, login, logout, register} from "../controllers/userController.js"
import express from "express";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";

const router = express.Router();
router.post("/register",register);
router.post("/login",login);
router.get("/logout",isAuthenticated,logout);
router.get("/myprofile",isAuthenticated,getmyprofile); 
router.get("/authors",getAllauthors);



export default router;