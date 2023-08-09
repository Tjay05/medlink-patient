import appointmentIcon  from '../../assets/icons/today-appt.svg';
import docIcon from '../../assets/icons/available-doc.svg'

const Dashboard = () => {
  return ( 
    <div className="wrapper">
    <div className="doctor-dashboard">
      <div className="grid-container">
        <article className="welcome">
          <div className="welcomeWrap">
            <p className="text-wrapper">Welcome</p>
            <p className="userName">Lois Poppins</p>
            <div className="welcome-line"></div>
            <p className="tip">An apple a day, keeps the doctors away. Eat an apple today!!!</p>
          </div>
        </article>
        <section className="cta">
          <div className="appToday">
            <img src={appointmentIcon} alt="" />
            <div className="appoint-details">
              <p>0</p>
              <p>Appointments</p>
              <p>Today</p>
            </div>
          </div>
          <div className="dividerLine"></div>
          <div className="appToday">
            <img src={docIcon} alt="" />
            <div className="appoint-details">
              <p>0</p>
              <p>Appointments</p>
              <p>Today</p>
            </div>
          </div>
        </section> 
      </div>
      <section className="recent-patients">

      </section>
    </div>
    </div>
   );
}
 
export default Dashboard;