import mongoose from "mongoose";

async function connect() {
  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connect to Mongodb Successfully");
  } catch (error) {
    throw new Error("Fail to Connect Mongodb");
  }
}

export default { connect };
