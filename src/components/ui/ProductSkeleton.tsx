export function ProductSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-t-xl bg-white shadow-lg">
      <div className="relative aspect-square w-full animate-pulse bg-gray-200"></div>
      <div className="border-cream-dark flex grow flex-col items-center border-t p-6 text-center">
        <div className="mb-2 h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
        <div className="mb-4 h-3 w-1/2 animate-pulse rounded bg-gray-200"></div>
        <div className="mt-auto h-4 w-1/3 animate-pulse rounded bg-gray-200"></div>
      </div>
    </div>
  );
}
