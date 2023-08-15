import { useState } from "react";
import { Link } from "react-router-dom";
import Cards from "react-credit-cards-2";

const AppointmentPAyment = () => {
  const [isUploading, setIsUploading] = useState(false);

  const handleClick = () => {
    setIsUploading(true);
  }

  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (e) => {
    setState((prev) => ({ ...prev, focus: e.target.name }));
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
            <Cards
              number={state.number}
              expiry={state.expiry}
              cvc={state.cvc}
              name={state.name}
              focused={state.focus}
            />
            <label htmlFor="cardNumber">Credit/Debit Card Number</label>
            <br />
            <input 
              type="number" 
              id="cardNumber"
              name="number"
              placeholder="XXXX  XXXX  XXXX  XXXX"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <div className="flexForm">
              <div className="twoForms">
                <label htmlFor="Expiry">Expiry Date</label>
                <br />
                <input
                  type="number"
                  id="Expiry"
                  name="expiry"
                  placeholder="Valid Thru"
                  value={state.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
              <div className="twoForms">
                <label htmlFor="CVV">CVV</label>
                <br />
                <input
                  id="CVV"
                  type="number"
                  name="cvc"
                  placeholder="CVC"
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
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