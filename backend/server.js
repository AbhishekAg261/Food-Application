import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config

const app = express();
const Port = process.env.PORT || 400;

//middleware

app.use(express.json());
app.use(cors());

//db connection
connectDb();

//routes

app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

//we are mounting this folder to this end point if we insert any file in this folder we can access that file
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.status(200).send("API Working");
});

app.listen(Port, () => {
  console.log("server in running on port 8800");
});
