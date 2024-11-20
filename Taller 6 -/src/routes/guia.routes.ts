import { Router } from "express";
import { getAllGuias, createGuia, updateGuia, deleteGuia } from "../controllers/guia.controller";

const router = Router();

router.get("/", getAllGuias);
router.post("/", createGuia);
router.patch("/:id", updateGuia);
router.delete("/:id", deleteGuia);

export default router;
