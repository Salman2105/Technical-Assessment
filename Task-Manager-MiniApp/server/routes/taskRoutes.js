import express from "express";

import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  toggleTaskCompletion,
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/", createTask);

router.get("/", getTasks);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

router.patch("/:id/toggle", toggleTaskCompletion);

export default router;