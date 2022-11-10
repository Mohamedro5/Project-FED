import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './Components/Navbar1.jsx';
import Card1 from './Components/Card1.jsx';
import Home from './Components/Home.jsx';
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import 
{
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


function App(props)
{
return<>
<div>
<Navbar1/>
   <BrowserRouter>
    <div className="App">
     <Routes>

      <Route path='/home'element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/contact'element={<Contact/>}/>
     

    </Routes>
    </div>
  </BrowserRouter>
  </div>
  </>
};

export default App;