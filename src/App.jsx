import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import LandingPage from "./pages/LandingPage"
import SignUp from "./pages/signup-login/SignUp"
import Verification from "./pages/signup-login/Verification"
import SucessSignup from "./pages/signup-login/SuccessSignUp"
import Login from "./pages/signup-login/Login"
import ChangePword from "./pages/signup-login/ChangePword"
import PwordVerification from "./pages/signup-login/PwordVerification"
import NewPword from "./pages/signup-login/NewPword"
import NavBar from "./layout/Navbar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<LandingPage/>}/>  
      <Route path='SignUp' element={<SignUp/>} /> 
      <Route path='Verification' element={<Verification/>} />
      <Route path='SuccessfulSignedUp' element={<SucessSignup/>}/>
      <Route path='Login' element={<Login/>} />
      <Route path='ChangePassword' element={<ChangePword/>} />
      <Route path='PasswordVerification' element={<PwordVerification/>} />
      <Route path='NewPassword' element={<NewPword/>} />
      <Route path='Home' element={<NavBar/>} />
      {/* </Route> */}
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
