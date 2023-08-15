import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (value.length > 1) {
      value = value.slice(0, 1);
    }

    setOtp((prevOtp) => {
      const newOtp = prevOtp.split("");
      newOtp[index] = value;
      return newOtp.join("");
    });

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleClick = () => {
    navigate("/SuccessfulSignedUp");
  };

  return (
    <div className="container verificationPage">
      <header>
        <nav>
          <p>
            <span className="white-line">Me</span>
            dli<span className="red-line">nk</span>
          </p>
        </nav>
      </header>
      <main>
        <h1>Verify your Email</h1>
        <p>
          An <span className="OTP">OTP</span> has been sent to your email.
          Enter the <span className="OTP">OTP</span> to verify your email
        </p>
        <form className="verify">
          <div className="otp">
            {Array.from({ length: 4 }, (_, index) => (
              <input
                key={index}
                type="number"
                maxLength="1"
                value={otp[index] || ""}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(ref) => (inputRefs.current[index] = ref)}
              />
            ))}
          </div>
          <button onClick={handleClick}>Next</button>
        </form>
      </main>
    </div>
  );
};

export default Verification;
