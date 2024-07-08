import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "../components/Navbar/Navbar";
import LanguageProvider from "../components/LanguageSelector/LanguageProvider";
import FlixModalProvider from "../components/Modal/FlixModalProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <main className="p-6 md:p-10 lg:p-14">
          <Navbar />
          <div>
            <FlixModalProvider>
              <Outlet />
            </FlixModalProvider>
          </div>
        </main>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
