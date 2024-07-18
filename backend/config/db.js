import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

export const connectDb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://abhishekagrawal261:dSZtcsZHqSkHbScZ@cluster0.rpnhfh0.mongodb.net/swiggy_app"
    )
    .then(() => {
      console.log("db connected");
    });
};
