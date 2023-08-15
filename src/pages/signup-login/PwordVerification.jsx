import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const PwordVerification = () => {
  const history = useNavigate();
  const [otpPassword, setOtpPassword] = useState("");
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (value.length > 1) {
      value = value.slice(0, 1);
    }

    setOtpPassword((prevOtpPassword) => {
      const newOtpPassword = prevOtpPassword.split("");
      newOtpPassword[index] = value;
      return newOtpPassword.join("");
    });

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otpPassword[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleClick = () => {
    history('/NewPassword')
  }

  return ( 
    <div className="container changePword verificationPage">
      <header>
        <nav>
          <p><span className="white-line">Me</span>dli<span className="red-line">nk</span></p> 
        </nav>
      </header>
      <main>
        <h1>Change Password</h1>
        <p>Enter the <span className="OTP">code</span> sent to your email to change your Password.</p>
        <form className="verify">
          <div className="otp">
            {Array.from({ length: 4 }, (_, index) => (
              <input
                key={index}
                type="number"
                maxLength="1"
                value={otpPassword[index] || ""}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(ref) => (inputRefs.current[index] = ref)}
              />
            ))}
          </div>
          <button onClick={handleClick} >Next</button>
        </form>
      </main>
    </div> 
  );
}
 
export default PwordVerification;