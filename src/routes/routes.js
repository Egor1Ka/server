import express from "express";
import { httpResponse } from "../utils/http/httpResponse.js";
import { generalStatus } from "../utils/http/httpStatus.js";
import categoryRoutes from "./subroutes/categoryRoutes.js";
import tagRoutes from "./subroutes/tagRoutes.js";
import productRoutes from "./subroutes/productRoutes.js";
import currencyRoutes from "./subroutes/currency.js";

const router = express.Router();

router.get("/", (req, res) => {
  httpResponse(res, generalStatus.SUCCESS);
});

router.use("/category", categoryRoutes);
router.use("/tag", tagRoutes);
router.use("/product", productRoutes);
router.use("/currency", currencyRoutes);
// router.use("/user", userRoute);
// router.use("/auth", authRoute);

export default router;
