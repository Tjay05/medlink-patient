import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RingLoader } from 'react-spinners';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [NHIS, setNhis] = useState('');
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

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    // Password validation
    if (password !== confirmPassword) {
      setData('Passwords do not match');
      setIsLoading(false);
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setData('Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters');
      setIsLoading(false);
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
          password,
          NHIS
      }),
      });
    const data = await response.json()
    setData(data);
    if (response.ok) {
      history('/Verification');
      setIsLoading(false);
    } else if(response.status === 401) {
      setData(data);
      setIsLoading(false);
    }else if (response.status === 404){
      setData(data);
      setIsLoading(false);
    }else{
      setData('Could not create account');
      setIsLoading(false);
    }
  }
    catch (error) {
      console.log("Topins' Error:", error);
      setIsLoading(false);
    }
  }

  return ( 
    <div className="container signUpPage">
      {isLoading && 
        <div className="loaded">
          <div className="loaderBox">
            <RingLoader color='#35693f' className='dotLoader' size={40} />
          </div>
        </div>
      }
      <header>
        <nav>
          <p><span><a className="white-line"></a>Me</span>dli<span> <a className="red-line"></a>nk</span></p> 
        </nav>
      </header>
      <main>
        <h1>Sign Up</h1>
        <form>
          <div className="signupForm">
            <div className="firstForm">
              <input
                type="text"
                required
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="NHIS"
                value={NHIS}
                onChange={(e) => setNhis(e.target.value)}
              />
              <select
                value={gender} 
                id="gender"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="secondForm">
              <input
                required
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                required
                type="number"
                placeholder="Mobile Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <input
                type="date"
                required
                placeholder="Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <div className="passVisibility">
                <input
                  type={ showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className='showPword' onClick={togglePasswordVisibility} >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              <input 
                type="password" 
                required
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