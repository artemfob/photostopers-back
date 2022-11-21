import Router from "express";
import UserController from "./userController.js";
import PostController from "./postController.js";
const router = new Router();

router.post("/users/get", UserController.getUser);
router.post("/register", UserController.registerUser);
router.post("/update", UserController.updateUserCreds);
router.post("/users/update", UserController.updateUserData);
router.post("/create", PostController.createPost);
router.post("/posts/all", PostController.getAllPosts);

export default router;
