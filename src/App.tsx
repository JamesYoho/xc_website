import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AwardPage } from "./pages/AwardPage";
import { HomePage } from "./pages/HomePage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/award/:slug" element={<AwardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;