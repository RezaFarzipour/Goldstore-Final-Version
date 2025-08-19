import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import defaultOptions from "./configs/reactQuery";
import { ToastProvider } from "./context/ToastProvider";
import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// تابع برای اسکرول به بالای صفحه
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

function App() {
  const { pathname } = useLocation();

  // هر بار که مسیر تغییر کند، صفحه به بالای صفحه می‌رود
  useEffect(() => {
    scrollToTop(); // تابع اسکرول را فراخوانی می‌کنیم
  }, [pathname]);

  const queryClient = new QueryClient({
    defaultOptions,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <AppRoutes />
      </ToastProvider>
    </QueryClientProvider>
  );
}

export default App;
