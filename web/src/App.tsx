import { Home } from './pages/Home';
import './styles/main.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameDetails } from './pages/GameDetails';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gameDetails/:id' element={<GameDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
