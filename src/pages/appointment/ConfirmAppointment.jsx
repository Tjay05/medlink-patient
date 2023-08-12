import { Link, useNavigate } from "react-router-dom";

const ConfirmApp = () => {
  const history = useNavigate();
  const handleClick = () => history(-1)

  return ( 
    <div className="confirmApp">
      <h2>Confirm and Submit your Appointment for (*date and time*)</h2>
      <div className="footerNav">
        <button onClick={handleClick} >Back</button>
        <Link to="../ConfirmAppointment" ><button>Confirm and Proceed to Payment</button></Link>
      </div>
    </div>
   );
}
 
export default ConfirmApp;