import { Link, NavLink, Outlet } from "react-router-dom";

const AppointmentWrap = () => {
  return (
    <div className="wrapper">
      <div className="AppWraPPer">
        <h2>Schedule an Appointment</h2>
        <nav className="slideNav">
          <ul className="slideNav">
            <li><NavLink to="/Appointments" ><span>1</span> Choose a Specialist</NavLink></li>
            <li><NavLink to="PickDate"><span>2</span> Choose a Date</NavLink></li>
            <li><NavLink to="ConfirmAppointment"><span>3</span> Confirm Appointment</NavLink></li>
            <li><NavLink to="AppointmentPayment"><span>4</span> Appointment Payment</NavLink></li>
          </ul>
        </nav>
        <div className="appBody">
          <Outlet/>
        </div>
      </div>
    </div>
   );
}
 
export default AppointmentWrap;