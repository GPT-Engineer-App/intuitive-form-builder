import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ApplicationForm from "./pages/ApplicationForm.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/application-form" element={<ApplicationForm />} />
      </Routes>
    </Router>
  );
}

export default App;