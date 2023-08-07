import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const history = useNavigate();

  const handleSubmit = () => {
    history('/Verification')
  }

  return ( 
    <div className="container signUpPage">
      <header>
        <nav>
          <p><span className="white-line">Me</span>dli<span className="red-line">nk</span></p> 
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
              />
              <input
                type="email"
                placeholder="Email Address"
              />
              <input
                type="text"
                placeholder="NHIS"
              />
              <select id="gender">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="secondForm">
              <input
                type="text"
                placeholder="Last Name"
              />
              <input
                type="number"
                placeholder="Mobile Number"
              />
              <input
                type="date"
                placeholder="Date of Birth"
              />
              <input
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <input 
            type="password" 
            className="confirm-password"
            placeholder="Confirm Password" 
          />
          <button onClick={handleSubmit} >Register</button>
        </form>
      </main>
    </div> 
  );
}
 
export default SignUp;