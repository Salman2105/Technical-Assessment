import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import TaskSkeleton from "../components/TaskSkeleton";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

export default function Dashboard () {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingTask, setEditingTask] = useState(null);

  const [darkMode, setDarkMode] = useState(false);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const safeTasks = Array.isArray(tasks) ? tasks : [];

  const filteredTasks = safeTasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all"
        ? true
        : task.status === filter;

    return matchesSearch && matchesFilter;
  });

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const res = await getTasks();
      const data = Array.isArray(res.data)
        ? res.data
        : res.data?.tasks ?? [];

      setTasks(data);
    } catch (error) {
      toast.error("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleCreateTask = async (data) => {
    try {
      const res = await createTask(data);
      const newTask = res.data ?? {};

      setTasks((prev) => [newTask, ...prev]);

      toast.success("Task created");

      setIsModalOpen(false);
    } catch (error) {
      toast.error("Failed to create task");
    }
  };

  const handleEditTask = async (data) => {
    try {
      const res = await updateTask(editingTask._id, data);

      setTasks((prev) =>
        prev.map((task) =>
          task._id === editingTask._id ? res.data : task
        )
      );

      toast.success("Task updated");

      setEditingTask(null);

      setIsModalOpen(false);
    } catch (error) {
      toast.error("Failed to update task");
    }
  };

  const handleDeleteTask = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {
      await deleteTask(id);

      setTasks((prev) =>
        prev.filter((task) => task._id !== id)
      );

      toast.success("Task deleted");
    } catch (error) {
      toast.error("Failed to delete task");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black dark:bg-gray-900">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        taskCount={safeTasks.length}
      />

      <main className="mx-auto max-w-7xl px-6 py-8">
        
        {/* Top Controls */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              Your Tasks
            </h2>

            <p className="mt-1 text-gray-500">
              Organize and track your work
            </p>
          </div>

          {/* Search + Filter */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <SearchBar
              search={search}
              setSearch={setSearch}
            />

            <FilterBar
              filter={filter}
              setFilter={setFilter}
            />
          </div>

          {/* Button */}
          <button
            onClick={() => {
              setEditingTask(null);
              setIsModalOpen(true);
            }}
            className="rounded-xl bg-black px-5 py-3 font-medium text-white transition hover:opacity-90"
          >
            + Add Task
          </button>
        </div>

        {/* Task Grid */}
        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <TaskSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onEdit={(task) => {
                  setEditingTask(task);
                  setIsModalOpen(true);
                }}
                onDelete={handleDeleteTask}
              />
            ))}
          </div>
        )}

        {/* Task Form Modal */}
        <TaskForm
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingTask(null);
          }}
          onSubmit={
            editingTask
              ? handleEditTask
              : handleCreateTask
          }
          editingTask={editingTask}
        />

      </main>
    </div>
  );
}
