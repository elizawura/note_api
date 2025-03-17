import { Note } from "../models/note_model.js";

export const getNote = async (req, res) => {
  const allNotes = await Note.find({});
  res.status(200).json({ notes: allNotes });
};

export const getNoteId = async (req, res) => {
  const oneNote = await Note.findById(req.params.id);
  res.status(200).json({ notes: oneNote });
};

// export const getBody = (req, res) => {
//   res.send("body added");
// };

export const getNotes = (req, res) => {
  res.status(200).json({ notes: "all notes" });
};

export const postNotes = async (req, res) => {
  const note = new Note(req.body);
  const newNote = await note.save();

  res.status(200).json({ notes: newNote });
};
