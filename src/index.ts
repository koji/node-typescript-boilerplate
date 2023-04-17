import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const PORT = 3000;
const app = express();
const port = process.env.PORT || PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("express server test");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
