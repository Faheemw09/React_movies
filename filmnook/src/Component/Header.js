import React, { useState, useEffect } from 'react';
import logomovie from '../Images/logo.jpg';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate=useNavigate()

  const handleLogout = () => {
    
    localStorage.removeItem('userToken');
    setIsLoggedIn(false);
    navigate("/")
  };

  return (
    <div className="Header">
      <div className="imagelogo">
        <img src={logomovie} alt="logo" className="logo_image" />
      </div>

      <div className="header_list">
        <div><ul>
        <Link  className="link-style" to="/movies">
            <li> <HomeWorkIcon style={{ fontSize: '2em' }} /></li>
          </Link></ul></div>
        <ul className="listitems">
         
          <li> <AssignmentIndIcon style={{ fontSize: '2em' }}/></li>
          <li><ContactPageIcon style={{ fontSize: '2em' }} /></li>
        </ul>
        <div>
          <ul>
           
              <Link to="/favorite" className="link-style"  >
                <li className="favt"><FavoriteIcon style={{ fontSize: '2em' }} /></li>
              </Link>
           
          </ul>
        </div>
       
          <button onClick={handleLogout} className='logout'><LogoutIcon  style={{ fontSize: '2em' }}/></button>
        
      </div>
    </div>
  );
};

export default Header;
