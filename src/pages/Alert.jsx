import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const AlertCom = () => {
  const patientData1 = localStorage.getItem('patient');
  const patient = JSON.parse(patientData1);

  const [isLoading, setIsLoading] = useState(false)

  const [alert , setAlert] = useState([])
  useEffect( ()=> {
    setIsLoading(true);
    fetch(`https://hospital-management-backend.onrender.com/patient/${patient._id}/alerts`)
    .then((res) => res.json())
    .then((data) => {
      setAlert(data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setIsLoading(false);
    })
  }, []);

  return ( 
    <div className="wrapper notificationWrap">
      <div className="doc-details">
        <h1 id="docName">{`${patient.firstname} ${patient.lastname}`}</h1>
      </div>

      {/* <div className="loaded">{isLoading && <ClipLoader color="#35693f" className="loadImg" loading={isLoading} size={60} />}</div> */}
      
      {alert && alert.map((alert) => (
          <div className="notification-preview" key={alert._id}>
              <img src={notification} alt="" />
              <p className="notification-message">{alert} </p>
          </div>
          
      ))}
    </div>
   );
}
 
export default AlertCom;