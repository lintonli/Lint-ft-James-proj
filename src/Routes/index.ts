import { Router } from "express";
import {
  getProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  addProduct,
} from "../Controllers";
const router = Router();
router.get("", getProducts);
router.get("/:id", getProduct);
router.post("", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
