import { useState, useEffect } from "react";

export default function TaskForm({
  isOpen,
  onClose,
  onSubmit,
  editingTask,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
    dueDate: "",
  });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title || "",
        description: editingTask.description || "",
        status: editingTask.status || "pending",
        dueDate: editingTask.dueDate
          ? editingTask.dueDate.split("T")[0]
          : "",
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      return alert("Title is required");
    }

    onSubmit(formData);

    setFormData({
      title: "",
      description: "",
      status: "pending",
      dueDate: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-xl">
        
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {editingTask ? "Edit Task" : "Create Task"}
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-black"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Title */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter task title"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Description
            </label>

            <textarea
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter task description"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Status */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Due Date */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Due Date
            </label>

            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-gray-300 px-5 py-3 font-medium"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-black px-5 py-3 font-medium text-white"
            >
              {editingTask ? "Update Task" : "Create Task"}
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}