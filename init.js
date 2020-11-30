import app from "./app";
import "./db";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";

const PORT = process.env.PORT || 2000;

const handleListening = (req, res) => {
    console.log(`✅ Listening on : http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
