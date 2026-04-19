import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainSignup from "./pages/MainSignup.jsx";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";
import WarningBanner from "./components/WarningBanner.jsx";
function App() {
  return (
    
    <div className="min-h-screen bg-white">
      <WarningBanner />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/signupMain" element={<MainSignup />} />
        <Route path='/signupMain/signup' element={<Signup/>}/>
        <Route path='/signin' element ={<Signin/>}/>
      </Routes>
    </div>
  );
}

export default App;
