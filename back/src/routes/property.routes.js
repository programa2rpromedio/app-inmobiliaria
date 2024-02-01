import { Router } from "express";
import PropertiesController from "../controllers/properties.controller.js";

const router = Router();

router.get("/", PropertiesController.getAll);

export default router;
