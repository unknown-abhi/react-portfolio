import React from "react";
import HomePage from "./pages/HomePage";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <main className="content-container">
        <div className="main-content">
          <HomePage />
        </div>
      </main>
    </div>
  );
};

export default App;
