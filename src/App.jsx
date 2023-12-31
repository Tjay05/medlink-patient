import { useState } from "react";
import { createContext } from "react";
import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

// ROUTES
// Landing Page 
import LandingPage from "./pages/LandingPage"

// Signup Page
import SignUp from "./pages/signup-login/SignUp"
import Verification from "./pages/signup-login/Verification"
import SucessSignup from "./pages/signup-login/SuccessSignUp"

// Login and Change Password Pages
import Login from "./pages/signup-login/Login"
import ChangePword from "./pages/signup-login/ChangePword"
import PwordVerification from "./pages/signup-login/PwordVerification"
import NewPword from "./pages/signup-login/NewPword"

// Navbar Layout
import NavBar from "./layout/Navbar";

// Body
// Home
import DashboardWrap from "./layout/DashWrap";
import Dashboard from "./pages/home/Dashboard";
import AppointmentReschedule from "./pages/home/AppointRechedule1";
import ApptReschedule2 from "./pages/home/AppointReschedule2";
import ConfirmAppt from "./pages/home/ConfirmAppointment";

// Appointment
import AppointmentWrap from "./layout/AppWrap";
import Appointment from "./pages/appointment/Appointment";
import ChooseAppDate from "./pages/appointment/ChooseDate";
import ConfirmApp from "./pages/appointment/ConfirmAppointment";
import AppointmentPAyment from "./pages/appointment/AppPayment";
import Notifications from "./pages/Notification";
import ProfilePage from "./pages/ProfilePage";
import AlertCom from "./pages/Alert";

export const PatientContext = createContext()

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<LandingPage/>}/>  
      <Route path='SignUp' element={<SignUp/>} /> 
      <Route path='Verification' element={<Verification/>} />
      <Route path='SuccessfulSignedUp' element={<SucessSignup />}/>
      <Route path='Login' element={<Login/>} />
      <Route path='ChangePassword' element={<ChangePword/>} />
      <Route path='PasswordVerification' element={<PwordVerification/>} />
      <Route path='NewPassword' element={<NewPword/>} />
      <Route element={<NavBar/>} >
        <Route path="Home" element={<DashboardWrap/>} >
          <Route index element={<Dashboard/>} />
          <Route path="AppointmentReschedule" element={<AppointmentReschedule/>} />
          <Route path="NextStep" element={<ApptReschedule2/>}/>
          <Route path="Confirmed" element={<ConfirmAppt/>} />
        </Route>
        <Route path="Appointments" element={<AppointmentWrap/>}>
          <Route index element={<Appointment/>} />
          <Route path="PickDate" element={<ChooseAppDate/>}/>
          <Route path="ConfirmAppointment" element={<ConfirmApp/>}/>
          <Route path="AppointmentPayment" element={<AppointmentPAyment/>}/>
        </Route>
        <Route path="Notifications" element={<Notifications/>}/>
        <Route path="Alerts" element={<AlertCom/>} />
        <Route path="Profile" element={<ProfilePage/>} />
      </Route>
    </Route>
  )
)
  
function App() {
  const [patientData, setPatientData] = useState('');
  return (
    <PatientContext.Provider value={{patientData, setPatientData}}>
      <RouterProvider router={router} patientData={patientData} setPatientData={setPatientData} />
    </PatientContext.Provider>
  )
}

export default App
