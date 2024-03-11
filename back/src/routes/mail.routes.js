import { Router } from "express";
import MailController from "../controllers/mail.controller.js";

const router = Router();

router.post("/contact/:pid", MailController.contactMail);

export default router;