import { useNavigate } from "react-router-dom";

const ChangePword = () => {
  const history = useNavigate();

  const handleClick = () => {
    history('/PasswordVerification')
  }

  return ( 
    <div className="container changePword loginPage">
      <header>
        <nav>
          <p><span><a className="white-line"></a>Me</span>dli<span> <a className="red-line"></a>nk</span></p>
        </nav>
      </header>
      <main>
        <h1>Change Password</h1>
        <div className="form-field">
          <form>
            <label htmlFor="PatientId">Enter your Patient ID</label>
            <br />
            <input 
              type="text"
              id="PatientId"
              placeholder="Patient ID"
            />
            <br />
            <label htmlFor="Email">Enter your Email Address</label>
            <br />
            <input 
              type="email"
              id="Email"
              placeholder="Email Address" 
            />
          </form> 
        </div>
        <button onClick={handleClick} >Recover</button>
      </main>
    </div>
  );
}
 
export default ChangePword;