import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from './../assets/icons/logo2.svg';
import blocks from './../assets/icons/blocks.svg';
import chart from './../assets/icons/chart.svg';
import chat from './../assets/icons/chat.svg';
import home from './../assets/icons/home.svg';
import appointmentIcon from './../assets/icons/app-icon.svg';
import notifyIcon from './../assets/icons/note-nav.svg';
import record from './../assets/icons/record.svg';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header className='patientHeader'>
        <nav className='header'>
          <ul className='leftNav'>
            <li><a><img src={logo} alt="Logo" /></a></li>
            <li className='noShow'><NavLink to='/home/'>Home</NavLink></li>
            <li className='noShow'><NavLink to='Appointments'>Appointments</NavLink></li>
            <li className='noShow'><NavLink to='Notifications'>Notifications</NavLink></li>
            <li className='noShow'><NavLink to='MedHistory'>Medical History</NavLink></li>
          </ul>
          <ul className='rightNav'>
            <li><img src={blocks} alt="" /></li>
            <li><img src={chart} alt="" /></li>
            <li><img src={chat} alt="" /></li>
            <li className='last'>
              <div className="profile">
                <p id="adminName">Lois Poppins</p>
                <span>Patient</span>
              </div>
              <Link className='initials' to="AdminProfile">L</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className='headerFooter' >
        {isMobile ? (
          <li className='hamburger' onClick={toggleMenu}>
            <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </li>
        ) : (
            <p className='header'>Home</p> 
        )}
      </div>
      {isMobile && (
        <aside>
          <nav className={`secondNav ${isMenuOpen ? 'open' : ''}`}> 
            <ul>
              <li>
                <img src={home} alt="" />
                <Link to='/home/'>Home</Link></li>
              <li>
                <img src={appointmentIcon} alt="" />
                <Link to='Appointments'>Appointments</Link></li>
              <li>
                <img src={notifyIcon} alt="" />
                <Link to='Notifications'>Notifications</Link></li>
              <li>
                <img src={record} alt="" />
                <Link to='MedHistory'>Medical History</Link></li>
            </ul>
          </nav>
        </aside>
      )} 
    </>
  );
}

export default NavBar;
