import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex items-center justify-between">
        <img
          src="/404page.svg"
          alt="Mario 404"
          className="w-[50%] h-[50%] mx-auto mb-8"
        />

        <div>
          <h1 className="text-2xl font-bold text-ha-primary1 pb-2">
            404 ERROR
          </h1>
          <p className="text-l text-gray-600  font-bold mb-8">
            Oops! The page you are looking for doesn't exist.
          </p>
          <Link
            to="/dashboard"
            className="bg-ha-primary1  text-white p-5 hover:bg-blue-500"
          >
            Return To Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
