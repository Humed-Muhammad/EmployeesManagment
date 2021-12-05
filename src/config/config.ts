import dotenv from "dotenv";
dotenv.config();
const DB_CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.xzlbl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 7000;

export { DB_CONNECTION_URL, PORT };
