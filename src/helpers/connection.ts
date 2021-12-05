import mongoose, { ConnectOptions } from "mongoose";
import { CatchErrorTypes, MongooseConnectionOptions } from "../types";

const option: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const connectToMongoDB = async (
  CONNECT_TODB: string,
  startExpressServer: VoidFunction
): Promise<void> => {
  try {
    return mongoose.connect(CONNECT_TODB, option, () => startExpressServer());
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
};
