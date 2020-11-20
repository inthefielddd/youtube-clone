import app from "./app";

const PORT = 2000;

const handleListening = (req, res) =>{
    console.log(`✅ Listening on : http://localhost:${PORT}`)
}

app.listen(PORT, handleListening);