import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { CalculatorPage } from "./components/CalculatorPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Routing automatically redirects user to the "/calculator" path */}
          <Route path="calculator" element={<CalculatorPage />}/>
          <Route path="" element={<Navigate to="/calculator"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;