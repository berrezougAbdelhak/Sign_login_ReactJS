import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <div>
      
      
<BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
