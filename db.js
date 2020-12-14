import monogoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

monogoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

const db = monogoose.connection;

const handleOpen = () => console.log("✅ connected to DB");
const handleError = (error) => console.log(`❌ Error on DB Conncetion:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
