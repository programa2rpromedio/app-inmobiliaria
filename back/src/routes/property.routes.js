import { Router } from "express";
import PropertiesController from "../controllers/properties.controller.js";
import verifyToken from "../middlewares/verifyJWT.js";
import multer from "multer";
import storage from "../utils/multer.util.js";

const router = Router();
const upload = multer({ storage: storage });

router.get("/", PropertiesController.getAll);
router.get("/:pid", PropertiesController.getById);
router.post("/", verifyToken, upload.array("images", 10), PropertiesController.createOne);
router.put("/:pid", PropertiesController.updateOne);
router.delete("/:pid", PropertiesController.deleteOne);

export default router;
