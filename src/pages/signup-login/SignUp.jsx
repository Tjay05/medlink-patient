import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')

  const [data, setData] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Signup-btn clicked');

    // Password validation
    if (password !== confirmPassword) {
      setData('Passwords do not match');
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setData('Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters');
      return;
    }

    try {
      const response = await fetch('https://hospital-management-backend.onrender.com/patient/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          email,
          number,
          Gender: gender,
          DOB: dob,
          password
      }),
      });
    const data = await response.json()
    setData(data);
    if (response.ok) {
      history('/Verification')
    } else if(response.status === 401) {
      setData(data)
      console.log('error for 401 ', data)
    }else if (response.status === 404){
      setData(data)
      console.log('error', data)
    }else{
      setData('Could not create account')
    }
  }
    catch (error) {
      console.log("Topins' Error:", error);
    }
  }

  return ( 
    <div className="container signUpPage">
      <header>
        <nav>
          <p><span><div className="white-line"></div>Me</span>dli<span> <div className="red-line"></div>nk</span></p> 
        </nav>
      </header>
      <main>
        <h1>Sign Up</h1>
        <form>
          <div className="signupForm">
            <div className="firstForm">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <input
                type="text"
                placeholder="NHIS"
              /> */}
              <select
                value={gender} 
                id="gender"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <div className="passVisibility">
                <input
                  type={ showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className='showPword' onClick={togglePasswordVisibility} >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
            <div className="secondForm">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="number"
                placeholder="Mobile Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <input
                type="date"
                placeholder="Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <input 
                type="password" 
                placeholder="Confirm Password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <p className="err-mssg">{data}</p>
          <button onClick={handleSubmit} >Register</button>
        </form>
      </main>
    </div> 
  );
}
 
export default SignUp;