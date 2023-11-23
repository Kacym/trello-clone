import { Navbar } from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import { AppRoutes } from "./routes/AppRoutes";

export function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar/>
        <AppRoutes />
      </AuthContextProvider>
    </>
  );
}
