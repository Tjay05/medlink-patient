import avatar from '../assets/icons/avatar.svg';
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { TbAlertCircle } from 'react-icons/tb';

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
      <div className="profile-notification">
        <img src={avatar} alt="" />
        <div className="aboutInfo">
          <p className='userName'>{`${patient.firstname} ${patient.lastname}`}</p>
          <p className='userId'>{patient.id}</p>
        </div>
      </div>

      {isLoading &&
      <div style={{textAlign: 'center', marginBlock: '2rem'}} className="loader"> <ClipLoader color="#35693f" className="loadImg" loading={isLoading} size={60} /></div>}
      
      {alert && alert.map((alert) => (
          <div className="notification-preview" key={alert}>
              {/* <img src={notification} alt="" /> */}
              <TbAlertCircle size={50}/>
              <p className="notification-message">{alert} </p>
          </div>
          
      ))}
    </div>
   );
}
 
export default AlertCom;