import { useState } from "react";
import { Link } from "react-router-dom";

const AppointmentPAyment = () => {
  const [isUploading, setIsUploading] = useState(false);

  const handleClick = () => {
    setIsUploading(true);
  }

  return ( 
    <>
      {!isUploading ? ( 
        <div className="paymentWrap">
          <form>
            <h3>Enter your card details to make payment</h3>
            <label htmlFor="email">Email Address</label>
            <br />
            <input 
              id="email"
              type="email"
              placeholder="example@yahoo.com"
            />
            <br />
            <label htmlFor="cardNumber">Credit/Debit Card Number</label>
            <br />
            <input 
              type="text" 
              id="cardNumber"
              placeholder="XXXX  XXXX  XXXX  XXXX"
            />
            <div className="flexForm">
              <div className="twoForms">
                <label htmlFor="Expiry">Expiry Date</label>
                <br />
                <input
                  type="month"
                  id="Expiry"
                />
              </div>
              <div className="twoForms">
                <label htmlFor="CVV">CVV</label>
                <br />
                <input
                  type="text"
                  id="CVV"
                  placeholder="XXX"
                />
              </div>
            </div>
          </form>
          <div className="formDivider"></div>
          <div className="totalPayment">
            <div className="subTotal">
              <p>Subtotal</p>
              <p>NGN 3550</p>
            </div>
            <div className="platformFee">
              <p>Platform Fee</p>
              <p>NGN 150</p>
            </div>
            <div className="total">
              <p>Total Payment</p>
              <p>NGN 3700</p>
            </div>
            <button onClick={handleClick}>Confirm Payment</button>
          </div>
        </div>
      ) : (
        <div className="wrapper">
          <div className="rescheduleAppt">
            <div id="body">
              <p id="head">Your Appointment Schedule has been Confirmed and Submitted</p>
              <p id="notice">Your appointment is pending. You will receive a notification once your appointment has been approved.</p>
              <Link to="/Home"><button>Done</button></Link>
            </div>
          </div>
        </div>
      )} 
    </>
  );
}
 
export default AppointmentPAyment;