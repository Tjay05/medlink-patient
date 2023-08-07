const Login = () => {
  return ( 
    <div className="container loginPage">
      <header>
        <nav>
          <p><span className="white-line">Me</span>dli<span className="red-line">nk</span></p> 
        </nav>
      </header>
      <main>
        <h1>Login</h1>
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
            <br />
            <label htmlFor="Password">Enter your Password</label>
            <br />
            <input 
              type="password" 
              id="Password"
              placeholder="Enter your Password"
            />
          </form>
          <p><a href="">Forgot Password</a></p>
        </div>
        <button>Login</button>
      </main>
    </div>
  );
}
 
export default Login;