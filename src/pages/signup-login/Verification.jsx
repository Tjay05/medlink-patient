import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const history = useNavigate();
  const [otp, setOtp] = useState("");
  const inputRefs = useRef([]);

  const [data, setData] = useState('')

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

  const handleClick = async (e) => {
    e.preventDefault()
    console.log(otp);
    console.log('otp clicked');
    
    try {
      const response = await fetch('https://hospital-management-backend.onrender.com/patient/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({OTP: otp}),
      });
      const data = await response.json()
      setData(data);
      if (response.ok) {
        history("/SuccessfulSignedUp")  
        console.log(data);      
      } else if(response.status === 401) {
        setData(data)
        console.log('error for 401', data);
      } else if (response.status === 404) {
        setData(data)
        console.log('error for 404', data);
      } else {
        setData('Couldnt not verify account')
      }
    }
    catch(error) {
      console.log('Tosin fd up', error);
    }
  }

  return (
    <div className="container verificationPage">
      <header>
        <nav>
          <p>
            <span><a className="white-line"></a>Me</span>dli<span> <a className="red-line"></a>nk</span>
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
          <p className="err-mssg">{data}</p>
          <button onClick={handleClick}>Next</button>
        </form>
      </main>
    </div>
  );
};

export default Verification;
