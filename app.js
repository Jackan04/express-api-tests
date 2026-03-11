import express from "express";
import indexRouter from "./routes/indexRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", indexRouter);
app.use("/users", userRouter);

export default app;
