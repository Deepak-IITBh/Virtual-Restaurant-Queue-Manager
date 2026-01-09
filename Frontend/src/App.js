import './App.css';
import Homepage from './pages/Homepage';
import ProjectPage from './pages/ProjectPage';
import { BrowserRouter, Route,Routes,Navigate } from 'react-router-dom';
import Cart from './pages/Cart';
import Profile from './pages/Profile';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Homepage/>} />
                <Route path="/project/:projectName" element={<ProjectPage />} />
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/account" element={<Profile />} />
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
