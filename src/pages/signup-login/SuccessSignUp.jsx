import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PatientContext } from "../../App";

const SucessSignup = ( ) => {
  const { patientData } = useContext(PatientContext);

  const history = useNavigate();

  const handleClick = () => {
    history('/Home')
    localStorage.setItem('patient', JSON.stringify({
      firstname: patientData.firstname,
      lastname: patientData.lastname,
      email: patientData.email,
      _id: patientData._id,
      nhis: patientData.NHIS
    }));       
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
          You have been registered successfully. Your patient ID is <br /><span className="patientId">{patientData.id}</span>
        </p>
        <p className="reminder">*You are to use your patient ID to login</p>
        <button onClick={handleClick} >Done</button>
      </main>
    </div> 
  );
}
 
export default SucessSignup;