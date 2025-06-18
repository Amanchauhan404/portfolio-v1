// Core UI components for notifications and tooltips
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// React Query for data fetching and state management
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// React Router for navigation
import { BrowserRouter, Routes, Route } from "react-router-dom";

// React hooks and EmailJS for contact form functionality
import { useEffect } from "react";
import emailjs from '@emailjs/browser';

// Page components
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Initialize React Query client for data management
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Retry failed requests up to 3 times
      retry: 3,
      // Cache data for 5 minutes
      staleTime: 5 * 60 * 1000,
    },
  },
});

const App = () => {
  // Initialize EmailJS when the app loads
  // This is needed for the contact form to work properly
  useEffect(() => {
    try {
      emailjs.init('2jFExJDmFtXtLx_A3');
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Toast notifications for user feedback */}
        <Toaster />
        <Sonner />
        
        {/* Router setup for navigation */}
        <BrowserRouter>
          <Routes>
            {/* Main portfolio page */}
            <Route path="/" element={<Index />} />
            
            {/* Catch-all route for 404 pages */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
