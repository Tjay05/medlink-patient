import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [patientId, setPatientId] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  const history = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://hospital-management-backend.onrender.com/doctor/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: patientId,
          password: password,
        }),
      });
      const data = await response.json()
      setData(data);
      if (response.ok) {
        history('/Home');            
      } else if(response.status === 401) {
          setData(data)
          console.log('error for 401 ', data)
        }else if (response.status === 404){
          setData(data)
          console.log('error', data)
        }else{
          setData('Could not login patient')
        }
    }
    catch (error) {
      console.log("Topins' Error:", error);
    }
  }

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
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
            />
            <br />
            
            <label htmlFor="Password">Enter your Password</label>
            <br />
            <div className="passVisibility">
              <input
                type={showPassword ? 'text' : 'password'}
                id="Password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className='showPword' onClick={togglePasswordVisibility} >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
              <p style={{fontStyle: 'italic'}} className="err-mssg" >{data}</p>
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