import { Router } from "express";
import PropertiesController from "../controllers/properties.controller.js";
import verifyToken from "../middlewares/verifyJWT.js";

const router = Router();

router.get("/", verifyToken, PropertiesController.getAll);
router.get("/:pid", PropertiesController.getById);
router.post("/", /* verifyToken .*/ PropertiesController.createOne);
router.put("/:pid", PropertiesController.updateOne);
router.delete("/:pid", PropertiesController.deleteOne);

export default router;
