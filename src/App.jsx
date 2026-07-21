import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SolutionsTechniques from './pages/SolutionsTechniques';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions-techniques" element={<SolutionsTechniques />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;