import { Router } from "express";

const userRouter = Router();

userRouter.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (id === 2) {
    res.status(404).send({ error: "Invalid userId" });
  }

  res.status(200).json({ id: id, name: "matt", age: 21 });
});

userRouter.post("/", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    res.status(400).send({ error: "Missing name or email" });
  }

  res.status(201).json({ name: name, email: email });
});

export default userRouter;
