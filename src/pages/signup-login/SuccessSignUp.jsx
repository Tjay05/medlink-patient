import { useNavigate } from "react-router-dom";

const SucessSignup = () => {
  const history = useNavigate();
  const handleClick = () => {
    history('/Login')
  }

  return ( 
    <div className="successSignupPage container">
      <header>
        <nav>
          <p><span><a className="white-line"></a>Me</span>dli<span> <a className="red-line"></a>nk</span></p> 
        </nav>
      </header>
      <main>
        <h1>Congratulations</h1>
        <p className="registeredSuccess">
          You have been registered successfully. Your patient ID is <br /><span className="patientId">11223344TP</span>
        </p>
        <p className="reminder">*You are to use your patient ID to login</p>
        <button onClick={handleClick} >Done</button>
      </main>
    </div> 
  );
}
 
export default SucessSignup;