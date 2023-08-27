import { useState } from "react";
import { Link } from "react-router-dom";
import { PaystackButton } from "react-paystack";

const AppointmentPAyment = () => {
  const patientData1 = localStorage.getItem('patient');
  const patient = JSON.parse(patientData1);

  const [isUploading, setIsUploading] = useState(false);

  // Paystack validation
  const publicKey = 'pk_test_a3718a2b3d82f06ddb8d855774c23ce8c1ea0a84';
  const amount= 3700;

  const payProps = {
    email: patient.email,
    amount: amount * 100,
    publicKey,
    text: 'Confirm Payment',
    onSuccess: () =>
      setIsUploading(true),
    onClose: () => alert("Wait! Don't leave :("),
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
              value={patient.email}
              disabled
            />
            <br />
            <label htmlFor="amount">Amount</label>
            <br />
            <input 
              type="number" 
              value={amount}
              disabled
              id="amount"
            />
            <br />
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
            <PaystackButton {...payProps} />
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