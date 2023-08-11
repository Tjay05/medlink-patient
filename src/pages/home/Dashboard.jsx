import { Link } from 'react-router-dom';

import appointmentIcon  from '../../assets/icons/today-appt.svg';
import docIcon from '../../assets/icons/available-doc.svg'
import clockIcon from '../../assets/icons/clock.svg';
import profilePic from '../../assets/images/doc1.png';
import Calendar from 'react-calendar';

const Dashboard = () => {
  return ( 
    <div className="wrapper">
      <div className="doctor-dashboard">
        <div className="grid-container">
          <article className="welcome">
            <div className="welcomeWrap">
              <p className="text-wrapper">Welcome,</p>
              <p className="userName">Lois Poppins</p>
              <div className="welcome-line"></div>
              <p className="tip">An apple a day, keeps the doctors away. Eat an apple today!!!</p>
            </div>
          </article>
          <section className="cta">
            <div className="appToday">
              <img src={appointmentIcon} alt="" />
              <div className="appoint-details">
                <p className='num'>0</p>
                <p className='appt'>Appointments</p>
                <p className='today'>Today</p>
              </div>
            </div>
            <div className="dividerLine"></div>
            <div className="appToday">
              <img src={docIcon} alt="" />
              <div className="appoint-details">
                <p className='num'>30</p>
                <p className='appt'>Available Doctors</p>
                <p className='today'>Today</p>
              </div>
            </div>
          </section> 
        </div>
        <section className="recentDoctors">
          <h2>Today's Doctors</h2>
          <div className="docsCard">
            <article>
              <div className="top">
                <img src={profilePic} alt="Profile" />
                <p className='docName'>Dr. Jacob Jones</p>
                <p className='role'>General Doctor</p>
              </div>
              <div className="bottom">
                <img src={clockIcon} alt="Profile" /> 
                <p>9:00 am to 2:30 pm</p>
              </div>
            </article>
            <article>
              <div className="top">
                <img src={profilePic} alt="Profile" />
                <p className='docName'>Dr. Jacob Jones</p>
                <p className='role'>General Doctor</p>
              </div>
              <div className="bottom">
                <img src={clockIcon} alt="Profile" /> 
                <p>9:00 am to 2:30 pm</p>
              </div>
            </article>
          </div>
        </section>
        <aside className="missedApp">
          <button>Missed your Appointment?</button>
          <Link to="AppointmentReschedule">Reschedule your Appointment</Link>
        </aside>
      </div>
      <div className="centerLine"></div>
      <div className="calendarWrap">
        <Calendar />
        <aside className="missedApp">
          <button>Missed your Appointment?</button>
          <Link to="AppointmentReschedule">Reschedule your Appointment</Link>
        </aside>
      </div>    
    </div>
   );
}
 
export default Dashboard;
