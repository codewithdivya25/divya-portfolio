import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProjectView from "./Pages/ProjectView";
import Footer from "./Pages/MiniComponent/Footer";
import ModeToggle from "./components/ModeToggle";
import { ThemeProvider } from "./components/ThemeProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider>
      <Router>

        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col">

          {/* FIXED THEME TOGGLE */}
          <div className="fixed top-4 right-4 z-50">
            <ModeToggle />
          </div>

          {/* MAIN CONTENT */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectView />} />
            </Routes>
          </main>

          {/* FOOTER ALWAYS BOTTOM */}
          <Footer />

          {/* TOAST */}
          <ToastContainer position="bottom-right" />

        </div>

      </Router>
    </ThemeProvider>
  );
}

export default App;