import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';
import Signup from './SignUp';

function App() {
  return (
   
    <div className="App">
  
      <Router>
     <Routes>
          <Route path="/"  element={<HomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          </Routes>
          </Router>
    </div>
 
  );
}

export default App;
