import express from "express";
//import { authorize } from "../middlewares/authorize.js";
import {
  createCategory,
  getCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} from "../../controllers/categoryController.js";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.post("/", upload.single("image"), createCategory);
router.get("/", getCategories);
router.get("/:id", getCategory);
router.put("/:id", upload.single("image"), updateCategory);
router.delete("/:id", deleteCategory);

export default router;
