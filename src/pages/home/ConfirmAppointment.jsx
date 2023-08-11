import { Link } from "react-router-dom";

const ConfirmAppt = () => {
  return ( 
    <div className="wrapper">
      <div className="rescheduleAppt">
        <h2>Reschedule your Appointment</h2>
        <div id="body">
          <p id="head">Your Appointment Schedule has been Confirmed and Submitted</p>
          <p id="notice">Your appointment is pending. You will receive a notification once your appointment has been approved.</p>
          <Link to="/home/"><button>Done</button></Link>
        </div>
      </div>
    </div> 
  );
}
 
export default ConfirmAppt;