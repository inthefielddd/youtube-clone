import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();


const PORT = 2000;


const handleProfile = (req, res)=>{
    res.send("my profile")
}
const handleHome = (req,res) =>{
    res.send("Welcome My Home😁")
}
const handleListening = (req, res) =>{
    console.log(`✅ Listening on : http://localhost:${PORT}`)
}
// middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));
app.use(morgan("dev"));
app.use(helmet());

app.get("/profile", handleProfile);
app.get("/", handleHome);
app.listen(PORT, handleListening);