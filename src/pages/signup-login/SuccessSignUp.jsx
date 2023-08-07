const SucessSignup = () => {
  return ( 
    <div className="successSignupPage container">
      <header>
        <nav>
          <p><span className="white-line">Me</span>dli<span className="red-line">nk</span></p> 
        </nav>
      </header>
      <main>
        <h1>Congratulations</h1>
        <p className="registeredSuccess">
          You have been registered successfully. Your patient ID is <br /><span className="patientId">11223344TP</span>
        </p>
        <p className="reminder">*You are to use your patient ID to login</p>
        <button>Done</button>
      </main>
    </div> 
  );
}
 
export default SucessSignup;