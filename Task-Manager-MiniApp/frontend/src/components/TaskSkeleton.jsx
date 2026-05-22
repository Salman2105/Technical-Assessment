export default function TaskSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-sm">
      
      <div className="mb-4 h-5 w-2/3 rounded bg-gray-200"></div>

      <div className="space-y-2">
        <div className="h-4 rounded bg-gray-200"></div>
        <div className="h-4 w-5/6 rounded bg-gray-200"></div>
      </div>

      <div className="mt-6 h-4 w-1/3 rounded bg-gray-200"></div>

      <div className="mt-8 flex justify-between">
        <div className="h-8 w-20 rounded-full bg-gray-200"></div>

        <div className="flex gap-3">
          <div className="h-8 w-8 rounded bg-gray-200"></div>
          <div className="h-8 w-8 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}