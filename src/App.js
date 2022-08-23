import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./Pages/Landingpage";
import Profile from "./Pages/Profile";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Help from "./Pages/Help";



import Home from "./Pages/Home";
import Modal from "./Components/Modal";
// import Navbar from "./Components/Navbar"
// import Footer from "./Components/Footer"
import SharedLayOut from "./Pages/SharedLayOut";
import SharedHomeLayout from "./Pages/SharedHomeLayout";
import "../src/Assets/styles/App.css";
import SingleCart from "./Pages/single-cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayOut />}>
        <Route index element={<Landingpage />} />
        <Route path="Home" element={<SharedHomeLayout/ >}>
          
          
        <Route index element= {<Home/>}/>
        <Route path="Profile" element={<Profile />} />
        <Route path="Signin" element={<Signin />} />
        <Route path="Help" element={<Help />} />
        <Route path="Signup" element={<Signup />} />
       
     
        <Route path="products/:id" element={<SingleCart />} />
      
        
        <Route path="Modal" element={<Modal />} />
           </Route>




      </Route>
    </Routes>
   
  );
}

export default App;
