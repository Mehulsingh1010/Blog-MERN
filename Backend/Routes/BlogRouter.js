import express from "express";
import {
  blogpost,
  deleteBlog,
  getMyblogs,
  getSingleBlog,
  getallBlogs,
  updateBlog,
} from "../controllers/BlogController.js";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";
const router = express.Router();

router.post("/post", isAuthenticated, isAuthorized("Author"), blogpost);
router.delete(
  "/delete/:id",
  isAuthenticated,
  isAuthorized("Author"),
  deleteBlog
);

router.get("/all", getallBlogs);
router.get("/singleBlog/:id", isAuthenticated, getSingleBlog);
router.get("/myBlogs", isAuthenticated, isAuthorized("Author"), getMyblogs);
router.put("/update/:id",isAuthenticated,isAuthorized("Author"),updateBlog);
export default router;
