import { BrowserRouter, Routes, Route } from "react-router-dom";
import SolutionsTechniques from "./pages/SolutionsTechniques";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions-techniques" element={<SolutionsTechniques />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
