import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from './../assets/icons/logo2.svg';
import blocks from './../assets/icons/blocks.svg';
import chart from './../assets/icons/chart.svg';
import chat from './../assets/icons/chat.svg';
import close from './../assets/icons/close.png';

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
            <li><img src={logo} alt="Logo" /></li>
            <li className='noShow'><NavLink>Home</NavLink></li>
            <li className='noShow'><NavLink>Appointments</NavLink></li>
            <li className='noShow'><NavLink>Notifications</NavLink></li>
            <li className='noShow'><NavLink>Medical History</NavLink></li>
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
            <p>Home</p> 
        )}
      </div>
      {isMobile && (
        <aside>
          <nav className={`secondNav ${isMenuOpen ? 'open' : ''}`}> 
            <ul>
              <li><Link>Home</Link></li>
              <li><Link>Appointments</Link></li>
              <li><Link>Notifications</Link></li>
              <li><Link>Medical History</Link></li>
            </ul>
          </nav>
        </aside>
      )} 
    </>
  );
}

export default NavBar;
