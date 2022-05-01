import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Notfound from './component/Notfound/Notfound';
import Services from './component/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/*" element={<Notfound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
