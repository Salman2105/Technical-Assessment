import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, priority, dueDate } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({
        message: "Task title is required",
      });
    }

    const task = await Task.create({
      title,
      description,
      priority: priority ? priority.charAt(0).toUpperCase() + priority.slice(1).toLowerCase() : "Medium",
      dueDate,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({
      createdAt: -1,
    });

    const formattedTasks = tasks.map((task) => ({
      ...task._doc,
      isOverdue:
        !task.completed &&
        task.dueDate &&
        new Date(task.dueDate) < new Date(),
    }));

    res.status(200).json(formattedTasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedTask) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const toggleTaskCompletion = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    task.completed = !task.completed;

    await task.save();

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};