import express from "express";
import conn from "./database/db.js";
import cors from "cors";

const app = express();
const PORT = 8000;
app.use(cors());
conn();

app.listen(PORT, () => console.log(`connected on PORT ${PORT}`));
