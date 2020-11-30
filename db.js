import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useFindAndModify: false,
    useUnifiedTopology: true 
});

const db = mongoose.connection;

const handleOpen = ()=> console.log("✅Connected to DB");
const handleError = error =>  console.log(`❌ Error on DB Connection:${error}`);

// DB를 한번 실행할떄마다
db.once("open",handleOpen);
db.on("error",handleError);

export default db;
