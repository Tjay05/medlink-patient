import avatar from '../assets/icons/avatar.svg';
import notification from '../assets/icons/notification-solid.svg';

const Notifications = () => {
  const patientData1 = localStorage.getItem('patient');
  const patient = JSON.parse(patientData1);

  return ( 
    <div className="wrapper notificationWrap">
      <div className="profile-notification">
        <img src={avatar} alt="" />
        <div className="aboutInfo">
          <p className='userName'>{`${patient.firstname} ${patient.lastname}`}</p>
          <p className='userId'>{patient.id}</p>
        </div>
      </div>
      <div className="notification-preview">
        <img src={notification} alt="" />
        <p className="notification-message">Congratulations. Your appointment schedule for 3:00pm, 23rd May has been approved.<br /><span>2:00pm</span></p>
      </div>
    </div>
   );
}
 
export default Notifications;