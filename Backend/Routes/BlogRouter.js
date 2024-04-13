import express from "express"
import { blogpost } from "../controllers/BlogController.js";
import {isAuthenticated, isAuthorized} from "../middlewares/auth.js"
const router = express.Router();

router.post("/post",isAuthenticated,isAuthorized("Author"),blogpost);

export default router;