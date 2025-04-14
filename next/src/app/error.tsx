"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className=" h-[90vh] flex items-center justify-center flex-col gap-4">
      <h2 className=" sm:text-4xl text-2xl font-bold text-purple-700">
        Something went wrong!
      </h2>
      <button
        className=" bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded-md transition-all"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
