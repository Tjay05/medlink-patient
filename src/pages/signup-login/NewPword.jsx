import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewPword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return ( 
    <div className="container changePword loginPage">
      <header>
        <nav>
          <p><span className="white-line">Me</span>dli<span className="red-line">nk</span></p> 
        </nav>
      </header>
      <main>
        <h1>Change Password</h1>
        <div className="form-field">
          <form>
            <label htmlFor="password">Enter New Password</label>
            <br />
            <div className="passVisibility">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="New Password"
              />
              <div className='showPword' onClick={togglePasswordVisibility} >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <br />
            <label htmlFor="newPassword">Confirm Password</label>
            <br />
            <input
              type={showPassword ? 'text' : 'password'}
              id="newPassword"
              placeholder="Confirm Password"
            />
          </form> 
        </div>
        <button>Done</button>
      </main>
    </div>
  );
}
 
export default NewPword;