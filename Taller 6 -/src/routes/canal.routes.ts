import { Router } from "express";
import { getAllCanales, createCanal, updateCanal, deleteCanal } from "../controllers/canal.controller";

const router = Router();

router.get("/", getAllCanales);
router.post("/", createCanal);
router.patch("/:id", updateCanal);
router.delete("/:id", deleteCanal);

export default router;
