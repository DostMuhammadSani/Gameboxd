import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';
import Signup from './SignUp';
import Main from './Main';
import GameDetail from './GameDetail';
import ReviewTable from './Reviews';

function App() {
  return (
   
    <div className="App">
  
      <Router>
     <Routes>
          <Route path="/"  element={<HomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/main" element={<Main/>} />
          <Route path="/game/:id" element={<GameDetail/>} />
          <Route path="/reviews" element={<ReviewTable/>}/>
          </Routes>
          </Router>
    </div>
 
  );
}

export default App;
