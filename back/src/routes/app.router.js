import { Router } from "express";
import userRoutes from "./user.routes.js";
import propertyRoutes from "./property.routes.js";
import errorMiddleware from "../middlewares/error.middleware.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/properties", propertyRoutes);

router.use(errorMiddleware);

export default router;
