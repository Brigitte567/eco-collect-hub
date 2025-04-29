
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Requests from "./pages/Requests";
import Trucks from "./pages/Trucks";
import Bins from "./pages/Bins";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import CollectionRequests from "./pages/CollectionRequests";
import NewCollectionRequest from "./pages/NewCollectionRequest";
import EditCollectionRequest from "./pages/EditCollectionRequest";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/trucks" element={<Trucks />} />
          <Route path="/bins" element={<Bins />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/collection-requests" element={<CollectionRequests />} />
          <Route path="/new-request" element={<NewCollectionRequest />} />
          <Route path="/edit-request/:id" element={<EditCollectionRequest />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
