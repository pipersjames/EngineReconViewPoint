import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import { Routes, Route } from 'react-router-dom';
import NavbarLayout from './components/NavbarLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavbarLayout/>}>
          <Route index element={<Landing/>}/>
        </Route>
      </Routes>
        
    </div>
  );
}

export default App;
