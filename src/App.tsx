import ScrollToTop from "./components/modules/ScrollToTop";
import defaultOptions from "./configs/reactQuery";
import { ToastProvider } from "./context/ToastProvider";
import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient({
    defaultOptions,
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <ScrollToTop />
          <AppRoutes />
          <ReactQueryDevtools initialIsOpen={false} />
        </ToastProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
