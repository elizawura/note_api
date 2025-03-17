import express from "express";
import noteRouter from "./routes/note_route.js";
import "dotenv/config";
import mongoose from "mongoose";

const connectionString = process.env.MONGO_URL;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });
// console.log(connectionString);

const app = express();

const port = 7079;

app.use(express.json());

// normal link for  postman (http://localhost:7079/notebody)

// app.get("/home", (req, res) => {
//   res.send("hello ! welcome to my first endpoint");
// });

// app.get("/home2", (req, res) => {
//   res.send("hello ! welcome to my second endpoint");
// });

app.use("/api/v1", noteRouter);
//extra link for api (http://localhost:7079/api/v1/notebody)

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
