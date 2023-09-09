import "./App.css";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";
import WelcomePage from "./Components/WelcomePage";
import RegisterPage from "./Components/registerPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
