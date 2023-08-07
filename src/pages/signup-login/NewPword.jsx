const NewPword = () => {
  return ( 
    <div className="container changePword loginPage">
      <header>
        <nav>
          <p><span className="white-line">Me</span>dli<span className="red-line">nk</span></p> 
        </nav>
      </header>
      <main>
        <h1>Change Password</h1>
        <div className="form-field">
          <form>
            <label htmlFor="password">Enter New Password</label>
            <br />
            <input 
              type="password"
              id="password"
              placeholder="New Password"
            />
            <br />
            <label htmlFor="newPassword">Confirm Password</label>
            <br />
            <input 
              type="password"
              id="newPassword"
              placeholder="Confirm Password" 
            />
          </form> 
        </div>
        <button>Done</button>
      </main>
    </div>
  );
}
 
export default NewPword;