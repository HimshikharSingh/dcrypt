import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";

function App() {
  return (
    <Routes>
      {/* Route for the home page */}
      <Route path="/" element={<HomePage />} />

      {/* Dynamic route for each coin */}
      <Route path="/coins/:coinId" element={<CoinPage />} />
    </Routes>
  );
}

export default App;
