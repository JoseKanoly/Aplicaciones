import { Router } from "express";
import { getAllProgramas, createPrograma, updatePrograma, deletePrograma } from "../controllers/programa.controller";

const router = Router();

router.get("/", getAllProgramas);
router.post("/", createPrograma);
router.patch("/:id", updatePrograma);
router.delete("/:id", deletePrograma);

export default router;
