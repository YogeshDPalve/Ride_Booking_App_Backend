import mongoose from "mongoose";

const connectDB = async (url) => {
  await mongoose.connect(url);
  console.log("***Database connected***");
};

export default connectDB;
