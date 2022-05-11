import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import RequirAuth from './component/Login/RequireAuth/RequireAuth';
import Navbar from './component/Navbar/Navbar';
import Notfound from './component/Notfound/Notfound';
import Register from './component/Register/Register';
import Services from './component/Services/Services';
import Update from './component/Update/Update';
import Additem from './component/Additem/Additem';
import Myitem from './component/Myitem/Myitem';




function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={
          
            <Services/>
        }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/update" element={
          <RequirAuth>
            <Update />
          </RequirAuth>
        } />
          

        <Route path="/additem" element={<Additem/>}/> 
        <Route path="/myitem" element={<Myitem/>}/> 
        <Route path="/*" element={<Notfound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
