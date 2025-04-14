import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/Landing Page/LandingPage";
import AboutUs from "./components/About/AboutUs";
import ContactUs from "./components/contactUS/ContactUs";
import Login from "./components/signin/Login";
const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
