const PwordVerification = () => {
  return ( 
    <div className="container changePword verificationPage">
      <header>
        <nav>
          <p><span className="white-line">Me</span>dli<span className="red-line">nk</span></p> 
        </nav>
      </header>
      <main>
        <h1>Change Password</h1>
        <p>Enter the <span className="OTP">code</span> sent to your email to change your Password.</p>
        <form className="verify">
          <div className="otp">
            <input type="text" id="" />
            <input type="text" id="" />
            <input type="text" id="" />
            <input type="text" id="" />
          </div>
          <button>Next</button>
        </form>
      </main>
    </div> 
  );
}
 
export default PwordVerification;