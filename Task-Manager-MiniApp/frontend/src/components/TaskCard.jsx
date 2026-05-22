import { Pencil, Trash2, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { getDaysLeft } from "../utils/helpers";

export default function TaskCard({
  task,
  onEdit,
  onDelete,
}) {
  const daysLeft = getDaysLeft(task.dueDate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {task.title}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            {task.description}
          </p>
        </div>

        <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
          {task.status}
        </span>
      </div>

      {/* Date */}
      <div className="mt-5 flex flex-col gap-2 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <CalendarDays size={16} />
          <span>Due: {task.dueDate || "TBD"}</span>
        </div>

        <span className="text-sm text-gray-500">
          {daysLeft > 0
            ? `${daysLeft} days left`
            : "Deadline passed"}
        </span>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        
        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
          {task.priority || "Normal"}
        </span>

        <div className="flex items-center gap-3">
          
          <button
            onClick={() => onEdit(task)}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-black"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(task._id)}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-red-100 hover:text-red-600"
          >
            <Trash2 size={18} />
          </button>

        </div>
      </div>

    </motion.div>
  );
}