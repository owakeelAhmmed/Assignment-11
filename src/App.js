import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import RequirAuth from './component/Login/RequireAuth/RequireAuth';
import Navbar from './component/Navbar/Navbar';
import Notfound from './component/Notfound/Notfound';
import Register from './component/Register/Register';
import Myitem from './component/Myitem/Myitem';
import Additem from './component/Additem/Additem';
import UpdateUser from './component/UpdateUser/UpdateUser';
import Blog from './component/Blog/Blog';
import Mycatalog from './component/Mycatalog/Mycatalog';
import Deliverproduct from './component/Deliverproduct/Deliverproduct';






function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mycatalog" element={
          <RequirAuth>
            <Mycatalog />
          </RequirAuth>
          } />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/additem" element={
          <RequirAuth>
            <Additem />
          </RequirAuth>
          } /> 
        <Route path="/updateuser/:id" element={
          <RequirAuth>
            <UpdateUser />
          </RequirAuth>
        }/>     
        <Route path="/myitem" element={
          <RequirAuth>
            <Myitem/>
          </RequirAuth>
        }/> 
        <Route path="/blog" element={<Blog/>}/> 
        <Route path="/deliverproduct/:id" element={<Deliverproduct/>}/> 
        <Route path="/*" element={<Notfound/>}/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
