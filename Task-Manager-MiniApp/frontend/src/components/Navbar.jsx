export default function Navbar({
  darkMode,
  setDarkMode,
  taskCount,
}) {
  return (
    <nav className="border-b bg-white dark:bg-gray-800 px-6 py-4 shadow-sm dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Task Manager
          </h1>
          <p className="text-sm text-gray-500">
            Manage your daily tasks
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-xl border px-4 py-2"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <div className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
            {taskCount ?? 0} Tasks
          </div>
        </div>
      </div>
    </nav>
  );
}