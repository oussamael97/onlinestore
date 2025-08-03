import Login from './pages/login';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Styles/Globale.css'
function App() {
  return (
    <Router >
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
