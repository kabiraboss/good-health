
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Contact from "./pages/contact/Contact";

import { BrowserRouter as Router, Route, Routes } 
from "react-router-dom";


function App() {
  const user= true 
  return (
  <Router>
    <Topbar />
    <Routes>
    <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/contact" element={user ? <Contact /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />

       
      
        

    </Routes>
  </Router>
  );
}

export default App;
