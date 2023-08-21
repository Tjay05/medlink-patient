import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../layout/AppWrap";

const ChooseAppDate = () => {
  const { appointmentDate, setAppointmentDate, appointmentTime, setAppointmentTime } = useContext(AppContext);

  const history = useNavigate();

  const handleClick = (e) => {
    history(-1);
    e.preventDefault()
  }

  return ( 
    <div className="appPayDateWrap">
      <form>
        <label htmlFor="newDate">Choose an Appointment Date</label>
        <br />
        <input
          type="Date"
          id="newDate"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
        />
        <br />
        <label htmlFor="newTime">Choose a Time for your Appointment</label>
        <br />
        <input
          type="Time"
          id="newTime"
          value={appointmentTime}
          onChange={(e) => setAppointmentTime(e.target.value)}
        />
        <div className="footerNav">
          <button onClick={handleClick} >Back</button>
          <Link to="../ConfirmAppointment" ><button>Next Step</button></Link>
        </div>
      </form>
    </div>  
  );
}
 
export default ChooseAppDate;