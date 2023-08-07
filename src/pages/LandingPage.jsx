import nurse from '../../src/assets/images/nurse.png';
import trackRecord from '../../src/assets/icons/track-record.svg';
import schedule from '../../src/assets/icons/schedule-pay.svg'
import lines from '../../src/assets/icons/is.svg';
import lines2 from '../../src/assets/icons/is-desktop.svg';

const LandingPage = () => {
  return ( 
    <div className='container landPage'>
      <header>
        <nav>
          <p><span className="white-line">Me</span>dli<span className="red-line">nk</span></p>
          <button>Sign Up</button>
        </nav>
      </header>
      <main>
        <section className='moto'>
          <div className="priority">
            <p>Your Health <span>Is</span> Our Top Priority</p>
            <img src={lines} alt="" />
            <img className='line2' src={lines2} alt="" />
            <button className='login1'>Login</button>
          </div>
          <img src={nurse} alt="nurse" />
        </section>
        <button className='login2'>Login</button>
        <section className='aboutUs'>
          <aside className='aside1' >
            <img src={trackRecord} alt="Track Record" />
            <p>Keep track of your medical record</p>
          </aside>
          <aside className='aside2'>
            <img src={schedule} alt="Schedule and Pay" />
            <p>Schedule and pay for appointments online</p>
          </aside>
        </section>
      </main>
    </div>
   );
}
 
export default LandingPage;