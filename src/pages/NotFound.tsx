// React Router hook to get current location
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  // Get the current pathname to log the 404 error
  const location = useLocation();

  // Log 404 errors for debugging purposes
  // This helps track if users are hitting broken links
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        {/* 404 error code */}
        <h1 className="text-4xl font-bold mb-4">404</h1>
        
        {/* User-friendly error message */}
        <p className="text-xl text-gray-600 mb-4">
          Oops! The page you're looking for doesn't exist
        </p>
        
        {/* Navigation link back to home */}
        <a 
          href="/" 
          className="text-blue-500 hover:text-blue-700 underline transition-colors duration-200"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
