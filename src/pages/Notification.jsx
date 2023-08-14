import avatar from '../assets/icons/avatar.svg';
import notification from '../assets/icons/notification-solid.svg';

const Notifications = () => {
  return ( 
    <div className="wrapper notificationWrap">
      <div className="profile-notification">
        <img src={avatar} alt="" />
        <div className="aboutInfo">
          <p className='userName'>Lois Poppins</p>
          <p className='userId'>87364523TP</p>
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