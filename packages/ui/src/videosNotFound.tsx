export default function VideosNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gray-50 dark:bg-neutral-800/50 rounded-lg border border-gray-100 dark:border-neutral-700 hover:border-gray-200 dark:hover:border-neutral-600 transition-colors">
      <div className="text-center max-w-md mx-auto p-6">
        <svg
          className="mx-auto h-10 w-10 text-gray-400 dark:text-gray-500 mb-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
        <h3 className="text-base font-medium text-gray-900 dark:text-white">
          No videos found
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Get started by importing your first video.
        </p>
      </div>
    </div>
  );
}
