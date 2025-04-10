import ScrollToTop from "./components/modules/ScrollToTop";
import defaultOptions from "./configs/reactQuery";
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
        <ScrollToTop/>
        <AppRoutes />
       <ReactQueryDevtools initialIsOpen={true}  />
      </QueryClientProvider>
    </>
  );
}

export default App;
