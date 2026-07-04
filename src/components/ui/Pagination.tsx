import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface PaginationProps {
  pageIndex: number;
  pageSize: number;
  totalItems: number;
  dataLength: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  previousPage: () => void;
  nextPage: () => void;
}

export default function Pagination({
  pageIndex,
  pageSize,
  totalItems,
  dataLength,
  canPreviousPage,
  canNextPage,
  previousPage,
  nextPage,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-between border-t border-gray-50 bg-gray-50/30 px-6 py-3">
      <div className="text-sm font-medium text-gray-500">
        Showing <span className="text-navy font-bold">{pageIndex * pageSize + (dataLength > 0 ? 1 : 0)}</span> to{' '}
        <span className="text-navy font-bold">{Math.min((pageIndex + 1) * pageSize, totalItems)}</span> of{' '}
        <span className="text-navy font-bold">{totalItems}</span> results
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={previousPage}
          disabled={!canPreviousPage}
          className="hover:text-navy flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition-all hover:border-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
        <button
          onClick={nextPage}
          disabled={!canNextPage}
          className="hover:text-navy flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition-all hover:border-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
