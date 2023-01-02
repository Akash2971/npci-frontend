import logo from './logo.svg';
import Register from './pages/Register/Register'
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/register" element = {<Register />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
