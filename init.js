import "./db";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/User";
import "./models/Comment";

const PORT = process.env.PORT || 2000;

const handleListening = (req, res) => {
    console.log(`✅ Listening on : http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
