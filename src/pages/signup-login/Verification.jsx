import { useNavigate } from "react-router-dom";

const Verification = () => {
  const history = useNavigate()

  const handleClick = () => {
    history('/SuccessfulSignedUp')
  }

  return ( 
    <div className="container verificationPage">
      <header>
        <nav>
          <p><span className="white-line">Me</span>dli<span className="red-line">nk</span></p> 
        </nav>
      </header>
      <main>
        <h1>Verify your Email</h1>
        <p>An <span className="OTP">OTP</span> has been sent to your email. Enter the <span className="OTP">OTP</span> to verify your email</p>
        <form className="verify">
          <div className="otp">
            <input type="text" id="" />
            <input type="text" id="" />
            <input type="text" id="" />
            <input type="text" id="" />
          </div>
          <button onClick={handleClick} >Next</button>
        </form>
      </main>
    </div> 
  );
}
 
export default Verification;