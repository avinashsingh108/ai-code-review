import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-6">
      <div className="bg-neutral-800 p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-2">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-300 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-white transition-transform duration-300 ease-in-out hover:scale-105 px-5 py-2 rounded-lg "
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
