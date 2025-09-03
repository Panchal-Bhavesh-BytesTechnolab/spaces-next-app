import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/users"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
