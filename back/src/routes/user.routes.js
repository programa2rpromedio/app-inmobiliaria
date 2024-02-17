import { Router } from "express";
import UsersController from "../controllers/users.controller.js";

const router = Router();

router.get("/", UsersController.getAll);
router.get("/:uid", UsersController.getById);
router.post("/", UsersController.createOne);
router.put("/:uid", UsersController.updateOne);
router.delete("/:uid", UsersController.deleteOne);
// router.post("/login", UsersController.login);


export default router;
