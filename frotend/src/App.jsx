import { BrowserRouter } from "react-router-dom"; // 👈 Add this import
import Navbar from "./components/navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter> {/* 👈 Wrap everything here */}
      <Navbar />

      <main>
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
