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

  console.log(`404 - Page not found: ${location.pathname}`);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        {/* 404 error code */}
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        
        {/* User-friendly error message */}
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        
        {/* Navigation link back to home */}
        <a 
          href="/" 
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Go back home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
