import { Search } from "lucide-react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="relative w-full md:w-80">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tasks..."
        className="w-full rounded-xl border border-gray-300 bg-white dark:bg-gray-900 py-3 pl-10 pr-4 outline-none transition focus:border-black"
      />
    </div>
  );
}