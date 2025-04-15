import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/Landing Page/LandingPage";
import AboutUs from "./components/About/AboutUs";
import ContactUs from "./components/contactUS/ContactUs";
import Login from "./components/signin/Login";
import Signup from "./components/signup/Signup";
import Upload from "./components/Upload/Upload";
import LeaderBoard from "./components/Leader Board/LeaderBoard";
import Profile from "./components/User Profile/Profile";
import Documents from "./components/Browse Documents/Documents";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/leaderboard' element={<LeaderBoard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/documents' element={<Documents />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default AppRouter;
