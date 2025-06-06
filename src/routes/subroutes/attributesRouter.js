import express from "express";
//import { authorize } from "../middlewares/authorize.js";
import * as attributeCtrl from "../../controllers/attributeController.js";

const router = express.Router();

router.post("/", attributeCtrl.createAttribute);
router.get("/", attributeCtrl.getAttributes);
router.get("/:id", attributeCtrl.getAttribute);
router.put("/:id", attributeCtrl.updateAttribute);
router.delete("/:id", attributeCtrl.deleteAttribute);
router.get("/:id/values", attributeCtrl.getAttributeValuesById);

export default router;
