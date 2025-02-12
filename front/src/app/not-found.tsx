import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-900">
      <h1 className="text-6xl font-semibold">404</h1>
      <p className="mt-4 text-lg text-gray-500">The page you are looking for does not exist.</p>
      <Link 
        href="/" 
        className="mt-6 rounded-lg bg-gray-900 px-6 py-3 text-white transition hover:bg-gray-700"
      >
        Go back home
      </Link>
    </div>
  );
}