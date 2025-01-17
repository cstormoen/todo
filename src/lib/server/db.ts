import mongoose from "mongoose";

export const connect = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }

    await mongoose.connect("mongodb://localhost:27017/todo");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};