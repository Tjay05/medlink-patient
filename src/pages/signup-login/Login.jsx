import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  const history = useNavigate();

  const handleLogin = () => history('/Home')

  return ( 
    <div className="container loginPage">
      <header>
        <nav>
          <p><span className="white-line">Me</span>dli<span className="red-line">nk</span></p> 
        </nav>
      </header>
      <main>
        <h1>Login</h1>
        <div className="form-field">
          <form>
            <label htmlFor="PatientId">Enter your Patient ID</label>
            <br />
            <input 
              type="text"
              id="PatientId"
              placeholder="Patient ID"
            />
            <br />
            <label htmlFor="Password">Enter your Password</label>
            <br />
            <div className="passVisibility">
              <input
                type={showPassword ? 'text' : 'password'}
                id="Password"
                placeholder="Enter your Password"
              />
              <div className='showPword' onClick={togglePasswordVisibility} >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </form>
          <p><Link to="/ChangePassword">Forgot Password</Link></p>
        </div>
        <button onClick={handleLogin} >Login</button>
      </main>
    </div>
  );
}
 
export default Login;