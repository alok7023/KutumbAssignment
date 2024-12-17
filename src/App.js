import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login";
import QuoteListPage from "./Components/QuoteList";
import CreateQuotePage from "./Components/CreateQuote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/quotes" element={<QuoteListPage />} />
        <Route path="/create" element={<CreateQuotePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
