"use client";

export default function Error({
  error,
  reset,
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white gap-5">

      <h2 className="text-4xl font-bold">
        Something went wrong
      </h2>

      <button
        onClick={() => reset()}
        className="bg-blue-500 px-6 py-3 rounded-2xl"
      >
        Try Again
      </button>

    </div>
  );
}