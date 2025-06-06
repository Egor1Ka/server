import express from "express";
//import { authorize } from "../middlewares/authorize.js";
import * as attributeValueCtrl from "../../controllers/attributeValueController.js";

const router = express.Router();

router.post("/", attributeValueCtrl.createAttributeValue);
router.post("/batch", attributeValueCtrl.createAttributeValuesBatch);
router.get("/", attributeValueCtrl.getAttributeValues);
router.delete("/batch-delete", attributeValueCtrl.deleteAttributeValuesBatch);
router.get("/:id", attributeValueCtrl.getAttributeValue);
router.put("/:id", attributeValueCtrl.updateAttributeValue);
router.delete("/:id", attributeValueCtrl.deleteAttributeValue);

export default router;
