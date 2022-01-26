import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Routes, Route,} from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact'
import Register from './Components/Register'
import Service from './Components/Serevice'
import Signin from './Components/Singin'
import NoMatch from './Components/NoMatch';
import Skills from './Components/Skills';
import './App.css'


const App=()=> {
  return (
    <div>
        <Routes>
          
          <Navbar />
         
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/contact" element={<Contact/>}/> 
          <Route exact path="/service" element={<Service/>}/>  
          <Route exact path="/register" element={<Register/>} />  
          <Route exact path="/signin" element={<Signin /> } />  
          <Route exact path="/signin" element={<Signin /> } />   
          <Routes exact path="/skill" element={<Skills /> } />   
          <Route exact path="*" element={<NoMatch />}/>
  
    
      
        </Routes>
    </div>
    
  );
}

export default App;
