// 순서 중요!!!
import dotenv from "dotenv";
import "./db";
import app from "./app";

import "./models/Video";
import "./models/Comment";
import "./models/User";

dotenv.config();

const {
  env: { PORT }
} = process;

const handleListening = () =>
  console.log(`✅  Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
