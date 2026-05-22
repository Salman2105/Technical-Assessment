export default function FilterBar({
  filter,
  setFilter,
}) {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="rounded-xl border border-gray-300 bg-white dark:bg-gray-800 px-4 py-3 outline-none focus:border-black"
    >
      <option value="all">All Tasks</option>
      <option value="pending">Pending</option>
      <option value="in-progress">In Progress</option>
      <option value="completed">Completed</option>
    </select>
  );
}