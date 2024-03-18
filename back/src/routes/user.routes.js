import { Router } from "express";
import UsersController from "../controllers/users.controller.js";
import multer from "multer";
import storage from "../utils/multer.util.js";
import verifyToken from "../middlewares/verifyJWT.js";

const router = Router();
const upload = multer({ storage: storage})

router.get("/", UsersController.getAll);
router.get("/:uid", UsersController.getById);
router.post("/", UsersController.createOne);
router.put("/:uid", verifyToken, UsersController.updateOne);
router.patch("/:uid/update-image", verifyToken, upload.single("image"), UsersController.updateImage);
router.patch("/:uid/favourites/:pid", verifyToken, UsersController.toggleFavouriteProperty);
router.delete("/:uid", verifyToken, UsersController.deleteOne);
// router.post("/login", UsersController.login);

export default router;
