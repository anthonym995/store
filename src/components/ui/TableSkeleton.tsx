export default function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-4 p-8">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex animate-pulse gap-4">
          <div className="h-10 w-1/4 rounded bg-gray-200"></div>
          <div className="h-10 w-1/4 rounded bg-gray-200"></div>
          <div className="h-10 w-1/4 rounded bg-gray-200"></div>
          <div className="h-10 w-1/4 rounded bg-gray-200"></div>
        </div>
      ))}
    </div>
  );
}
