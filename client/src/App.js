import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* TODO calculato path element */}
          {/*<Route path="calculator" element={}/>*/}
          <Route path="" element={<Navigate to=""/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;