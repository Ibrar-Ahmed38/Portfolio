import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router, Route,Switch} from "react-router-dom";
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
        <Router>
          <div>
          <Navbar />
          <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/contact">   <Contact/> </Route>
          <Route exact path="/service">  <Service/></Route>
          <Route exact path="/register"> <Register/> </Route>
          <Route exact path="/signin">   <Signin /> </Route>
          <Route exact path="/signin">   <Signin /> </Route>
          <Route exact path="/skill">   <Skills /> </Route>
          <Route exact path="*"> <NoMatch /></Route>
            </Switch>
          </div>
       

        </Router>
    </div>
    
  );
}

export default App;
