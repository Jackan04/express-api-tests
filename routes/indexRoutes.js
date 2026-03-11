import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.status(200).json({ status: "ok" });
});

export default indexRouter;
