import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './componets/Login';
import Logout from './componets/Logout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/logout' element ={<Logout/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
