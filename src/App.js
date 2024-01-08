
import './App.css';
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        
           <Routes>
            <Route element={<Home/>} path='/' />
            <Route element={<Login/>} path='/login' />
            <Route element={<Dashboard/>} path='/dashboard' />
           
           </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
