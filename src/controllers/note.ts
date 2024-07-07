import { RequestHandler } from "express";
import Note, { NoteDocument } from "../models/note";

export interface IncomingBody{
    title: string;
    description?: string;
  }
  

export const create: RequestHandler =async (req, res) => {
    const { noteId } = req.params;
    // const note = await Note.findById(noteId);
    // if (!note) return res.json({ error: "Note not found!" });
  
    const { title, description } = req.body as IncomingBody;
    // if (title) note.title = title;
    // if (description) note.description = description;
  
    const note = await Note.findByIdAndUpdate(
      noteId,
      { title, description },
      { new: true }
    );
    if (!note) return res.json({ error: "Note not found!" });
  
    await note.save();
  
    res.json({ note });
  }

  export const updateSingleNote: RequestHandler = async (req, res) => {
    const { noteId } = req.params;
    // const note = await Note.findById(noteId);
    // if (!note) return res.json({ error: "Note not found!" });
  
    const { title, description } = req.body as IncomingBody;
    // if (title) note.title = title;
    // if (description) note.description = description;
  
    const note = await Note.findByIdAndUpdate(
      noteId,
      { title, description },
      { new: true }
    );
    if (!note) return res.json({ error: "Note not found!" });
  
    await note.save();
  
    res.json({ note });
  }

  export const deleteNote: RequestHandler = async (req, res) => {
    const { noteId } = req.params;
  
    const removedNote = await Note.findByIdAndDelete(noteId);
  
    if(!removedNote)  return res.json({ error: "Could not remove note!" });
  
    res.json({message:"Note deleted successfully"});
    
  }

  export const getAllNotes: RequestHandler = async (req, res) => {
    const notes = await Note.find()
    res.json({ notes });
  }

  export const GetSingleNote: RequestHandler = async (req, res) => {
    const {id} = req.params;
    const notes = await Note.findById(id)
    if(!notes) return res.json({ error: "Note not found!" });
    res.json({ notes });
  }