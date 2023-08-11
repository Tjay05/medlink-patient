import { Link, useNavigate } from "react-router-dom";

const AppointmentReschedule = () => {
  const history = useNavigate();
  const handleClick = (e) => {
    history(-1);
    e.preventDefault()
  }
  return ( 
    <div className="wrapper">
      <div className="rescheduleAppt">
        <h2>Reschedule your Appointment</h2>
        <h3>Enter the initial appointment date</h3>
        <form>
          <label htmlFor="InitialDate">Initial Appointment Date</label>
          <br />
          <input
            type="Date"
            id="InitialDate"
          />
          <br />
          <label htmlFor="InitialTime">Initial Appointment Time</label>
          <br />
          <input
            type="Time"
            id="InitialTime"
          />
          <div className="footerNav">
            <button onClick={handleClick}>Back</button>
            <Link to="../NextStep" ><button>Next Step</button></Link>
          </div>
        </form>
      </div>
    </div>
   );
}
 
export default AppointmentReschedule;