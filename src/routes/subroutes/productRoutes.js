import express from "express";
//import { authorize } from "../middlewares/authorize.js";
import {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../../controllers/productController.js";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.post("/", upload.single("images"), createProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
