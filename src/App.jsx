import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import NavBar from "./NavBar";
import Footer from "./Footer";

import DashBoard from "./ActiveStudent/DashBoard";
import ActiveStudents from "./ActiveStudent/ActiveStudents";


import Register from "./ActiveStudent/Register";

import SignIn from "./ActiveStudent/LoginPageStudent";

import { Toaster } from "react-hot-toast";
import SecondDashBoard from "./ActiveStudent/SecondDashboard";
import OTP from "./ActiveStudent/OTP";
import Forgot from "./ActiveStudent/Forgot";
import EditPass from "./ActiveStudent/EditPass";
import ForgotOTP from "./ActiveStudent/ForgotOTP";
import EditProfile from "./ActiveStudent/EditProfile";
import DeleteOtp from "./ActiveStudent/DeleteOtp";

import RegisterAl from "./Alumni/RegisterAl";
import OTPAL from "./Alumni/OTPregal";
import SignInAl from "./Alumni/SignAl";
import AlDashBoard from "./Alumni/AlDashBoard";
import AlEditProfile from "./Alumni/AlEditProfile";
import AlForgot from "./Alumni/Alforgotpass";
import AlForgotOTP from "./Alumni/AlOTPpassword";
import AlEditPass from "./Alumni/ChangePassword";
import AlDeleteOTP from "./Alumni/DeleteAl";
import AlActiveStudents from "./Alumni/ActiveStudental";

import AlSecondDashBoard from "./Alumni/AlSecondDashBoard";
import AlumniStudents from "./Alumni/AlumiMember";
import AlumniActive from "./ActiveStudent/Alumniactive";
import AlumniDashBoard from "./ActiveStudent/Alumniboard";
import AlumniDashBoardAl from "./Alumni/AlumniIndivPro";

import SiteAdmin from "./Admin/AdminPanel";
import ActiveStudents2 from "./ActiveStudents2";
import StudentsDashboardadmin from "./ActiveStudent/StudentsDashboardadmin";
import HostAlumniboard from "./Home/HostAlumniboard";
import LandingPage from "./Home/LandingPage";
import Upcoming from "./Home/UpcomingEvent";
import Attendance from "./Home/Attendance";
import SearchAttendance from "./Home/SearchAttendance";
import PresSpeech from "./Home/PresidentSpeech";
import Excos from "./Home/Excos";
import RecentEvents from "./Home/RecentEvent";
import UpcomingEvents from "./Home/UploadUpcoming";
import Logo from "./Home/UplaodLogo";
import FemaleStudent from "./FemaleActive/FemaleStudent";






function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes className="min-vh-100">
          <Route path="/home" element={<Home />} />

          <Route path="/active" element={<ActiveStudents />} />
          <Route path="/alumni" element={<AlumniStudents/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/board" element={<DashBoard />} />
          <Route path="/signactive" element={<SignIn />} />

          <Route path="/otp" element={<OTP />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/sboard/:member_id" element={<SecondDashBoard />} />
          <Route path="/password" element={<Forgot />} />
          <Route path="/updatepassword" element={<EditPass />} />
          <Route path="/forgototp" element={<ForgotOTP />} />
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/otpdel" element={<DeleteOtp />} />
          
          <Route path="/registeral" element={<RegisterAl />} />
          <Route path="/otpal" element={<OTPAL />} />
          <Route path="/loginal" element={<SignInAl />} />
          <Route path="/boardal" element={<AlDashBoard />} />
          <Route path="/edital" element={<AlEditProfile/>} />
          <Route path="/alpassword" element={<AlForgot/>} />
          <Route path="/alforgototp" element={<AlForgotOTP />} />
          <Route path="/alupdatepassword" element={<AlEditPass />} />
          <Route path="/alotpdel" element={<AlDeleteOTP/>} />
          <Route path="/alactive" element={<AlActiveStudents/>} /> 
          <Route path="/sboardal/:member_idal" element={<AlSecondDashBoard/>} />
          <Route path="/alumniactive" element={<AlumniActive/>} />
          <Route path="/alum/:member_idalumni" element={<AlumniDashBoard/>} />
          <Route path="/alumni/:member_idalumnii" element={<AlumniDashBoardAl/>} />
          <Route path="/admin" element={<SiteAdmin/>} />
          <Route path="/activeadmin" element={<ActiveStudents2/>} />
          <Route path="/students" element={<StudentsDashboardadmin/>} />
          <Route path="/alumniinfo" element={<HostAlumniboard/>} />
          <Route path="/" element={<LandingPage/>} />
          <Route path="/upcoming" element={<Upcoming/>} />
          <Route path="/attendance" element={<Attendance/>} />
          <Route path="/searchattend" element={< SearchAttendance/>} /> 
          <Route path="/speech" element={< PresSpeech/>} />
          <Route path="/exco" element={< Excos/>} /> 
          <Route path="/event" element={< RecentEvents/>} /> 
          <Route path="/upcomings" element={< UpcomingEvents/>} />
          <Route path="/logo" element={< Logo/>} /> 
          <Route path="/femalepage" element={< FemaleStudent/>} /> 
          
          
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </div>
  );
}

export default App;
