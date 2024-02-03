import { Router } from "express";
import PropertiesController from "../controllers/properties.controller.js";

const router = Router();

router.get("/", PropertiesController.getAll);
router.get("/:pid", PropertiesController.getById);
router.post("/", PropertiesController.createOne);
router.put("/:pid", PropertiesController.updateOne);
router.delete("/:pid", PropertiesController.deleteOne);

export default router;
