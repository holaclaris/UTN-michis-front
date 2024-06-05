import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import AgregarGatitos from './AgregarGatitos';
import NoPage from './NoPage';

function App() {  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='AgregarGatitos' element={<AgregarGatitos />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;