import  Router  from "express";
import DocController from './DocController.js'

const router = new Router();

router.post('/users/add', DocController.createUser)
router.post('/some', DocController.getUser)

export default router