import React  from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignUp from "./Pages/SignUp/SignUp";
import LogIn from "./Pages/LogIn/LogIn";
import Home from './Pages/Home/Home'
import Profile from "./Pages/Profile/Profile";
import Content from "./Pages/Content/Content";
function App() {
  
    return (
      <Router>
        <Routes>
          <Route path="/:id" element={<Home/>}/>
          <Route path="/profile/:usrid" element={<Profile/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/login" element={<LogIn/>}/>
          <Route path="/content/:name" element={<Content/>}/>
        </Routes>
      </Router>
      
    );
}

export default App;
