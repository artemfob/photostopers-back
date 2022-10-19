import Router from "express";
import DocController from "./DocController.js";

const router = new Router();

router.post("/users/add/:uid", DocController.createUser);
router.post("/users/get/:uid", DocController.getUser);
router.post("/register", DocController.registerUser);
router.post("/users/update/:uid", DocController.updateUser);
export default router;
