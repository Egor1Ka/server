import express from "express";
// import { authorize } from "../middlewares/authorize.js";
import {
  createTag,
  getTag,
  getTags,
  updateTag,
  deleteTag,
} from "../../controllers/tagController.js";

const router = express.Router();

router.post("/", createTag);
router.get("/", getTags);
router.get("/:id", getTag);
router.put("/:id", updateTag);
router.delete("/:id", deleteTag);

export default router;
