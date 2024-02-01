import { Router } from "express";
import UsersController from "../controllers/users.controller.js";

const router = Router();

router.get("/", UsersController.getAll);
router.post("/register", UsersController.createUser);
router.post("/login", UsersController.login);

export default router;
