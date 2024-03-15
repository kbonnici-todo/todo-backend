import express from "express";
import cors from "cors";
import { fetchTodos } from "./todo/todo";

const app = express();
const port = 3000;

app.use(cors());

app.get("/todos", (_, res) => {
  console.log("[Log]: Received Request at /todos");
  const todos = fetchTodos();
  res.send(todos);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
