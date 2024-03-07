import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import multer from "multer";
import storage from "../utils/multer.util.js";

const router = Router();
const upload = multer({ storage: storage });

router.post("/register", upload.single("image"), AuthController.register);
router.post("/login", AuthController.login);

export default router;
