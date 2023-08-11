import { useNavigate, Link } from "react-router-dom";

const ApptReschedule2 = () => {
  const history = useNavigate();
  const handleClick = (e) => {
    history(-1);
    e.preventDefault()
  }

  return ( 
    <div className="wrapper">
      <div className="rescheduleAppt">
        <h2>Reschedule your Appointment</h2>
        <h3>Choose a new date and time for your appointment</h3>
        <form>
          <label htmlFor="newDate">Choose a new date</label>
          <br />
          <input
            type="Date"
            id="newDate"
          />
          <br />
          <label htmlFor="newTime">Set a new time</label>
          <br />
          <input
            type="Time"
            id="newTime"
          />
          <div className="footerNav">
            <button onClick={handleClick} >Back</button>
            <Link to="../Confirmed" ><button>Next Step</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
}
 
export default ApptReschedule2;