import './App.css';
import SettingsIcon from '@mui/icons-material/Settings';
import Sidebar from './components/Sidebar';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/Profile';
import Home from './page/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Sidebar />} />
          <Route path="/circular" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      {/* <Sidebar /> */}
      {/* <div className='greet'>
        <h1 className='greeting'>Welcome Back, Mayank 👋</h1>
      </div>
      <a href='#' className='setting'><SettingsIcon /></a> */}
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
