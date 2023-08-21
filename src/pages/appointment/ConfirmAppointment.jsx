import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../layout/AppWrap";

const ConfirmApp = () => {
  const { specialistType, appointmentDate, appointmentTime } = useContext(AppContext);

  const history = useNavigate();
  const handleClick = () => history(-1)

  return ( 
    <div className="confirmApp">
      <h2>Confirm and Submit your Appointment for (*date and time*)</h2>
      <form>
        <input 
          value={specialistType}
          disabled
        />
        <input
          disabled
          value={appointmentDate}
        />
        <input
          disabled
          value={appointmentTime}
        />
      </form>
      <div className="footerNav">
        <button onClick={handleClick} >Back</button>
        <Link to="../AppointmentPayment" ><button>Confirm and Proceed to Payment</button></Link>
      </div>
    </div>
   );
}
 
export default ConfirmApp;