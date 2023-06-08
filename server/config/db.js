import mongoose from "mongoose";
import config from "./config.js";
async function connect() {
  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(config.mongodb.uri);
    console.log("Connect to Mongodb Successfully");
  } catch (error) {
    throw new Error("Fail to Connect Mongodb");
  }
}

export default { connect };
