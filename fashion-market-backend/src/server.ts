import mongoose from "mongoose";
import app from "./app";
import config from "./config/config";

async function main() {
  try {
    await mongoose.connect(config.database_Url!);
    console.log("======Database Connection Successful======");

    app.listen(config.port, () => {
      console.log(` app is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main().catch((err) => console.log(err));
