import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SolutionsTechniques from "./pages/SolutionsTechniques";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import MentionsLegales from "./pages/MentionsLegales";
import ConditionsGeneralesVente from "./pages/ConditionsGeneralesVente";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/solutions-techniques"
          element={<SolutionsTechniques />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/mentions-legales"
          element={<MentionsLegales />}
        />

        <Route
          path="/conditions-generales-de-vente"
          element={<ConditionsGeneralesVente />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;