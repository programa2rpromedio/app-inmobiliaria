import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now().toString() + "-" + path.basename(file.originalname));
  },
});

export default storage;
