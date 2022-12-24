import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Home, HomeName} from './pages';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home-name' element={<HomeName/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
