import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectToMongoDB } from "./helpers/connection";
import { DB_CONNECTION_URL, PORT } from "./config/config";
import routes from "./routes/routes";

const app = express();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/employees", routes);

const startExpressServer = () => {
  return app.listen(PORT, () =>
    // tslint:disable-next-line:no-console
    console.log(`Server is runing on port ${PORT}`)
  );
};

connectToMongoDB(DB_CONNECTION_URL, startExpressServer);
