import { Router } from "express";
import { create, deleteNote, getAllNotes, GetSingleNote, updateSingleNote } from "../controllers/note";


const router = Router()

router.post("/create",create);

router.patch("/:noteId", updateSingleNote);

router.delete("/:noteId", deleteNote);

router.get("/", getAllNotes);

router.get("/:id", GetSingleNote);

export default router;