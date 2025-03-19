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
import {
  getUsers,
  loginUser,
  registerUser,
} from "../controllers/user_controller.js";

export const noteRouter = Router();

noteRouter.get("/notes", getNote);
noteRouter.post("/notes", postNotes);
noteRouter.get("/notes/:id", getNoteId);
noteRouter.post("/users/signup", registerUser);
noteRouter.get("/users", getUsers);
noteRouter.post("/users/login", loginUser);

export default noteRouter;
