import { Router } from "express";
// or const noteRouter = express.Router()

import {
  getNote,
  getNoteId,
  getNotes,
  //   getBody,
  //   getTitle,
  postNotes,
} from "../controllers/note_controller.js";
import { getUsers, registerUser } from "../controllers/user_controller.js";

export const noteRouter = Router();

noteRouter.get("/notes", getNote);
noteRouter.post("/notes", postNotes);
noteRouter.get("/notes/:id", getNoteId);
noteRouter.post("/users", registerUser);
noteRouter.get("/users", getUsers);
export default noteRouter;
