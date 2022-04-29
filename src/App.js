import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
