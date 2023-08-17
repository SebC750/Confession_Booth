import logo from './logo.svg';
import './App.css';
import Mainpage from './mainpage.js';
import Challenges from './Challenges.js';
import Lessons from './Lessons.js';
import Settings from './Settings.js'
import Login from './Login.js';
import Signup from './Signup.js';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

import Profile from "./Profile.js"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
        <Route exact path="/" element={<Mainpage/>}> </Route>
        <Route exact path="/Profile" element={<Profile/>}> </Route>
        <Route exact path="/Signup" element={<Signup/>}> </Route>
        <Route exact path="/Challenges" element={<Challenges/>}> </Route>
        <Route exact path="/Settings" element={<Settings/>}> </Route>
        <Route exact path="/Lessons" element={<Lessons/>}> </Route>
        </Routes> 
    
      </BrowserRouter>
    </div>
  );
}

export default App;
