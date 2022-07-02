import './topbar.css'
import logo from './pic-one.jpeg';
import { Link } from 'react-router-dom';

export default function TopBar() {
  const user = true;
  return (
    <div className='top'>
      <div className='topLeft'>
      <i className="topIcon fa-brands fa-facebook-square"></i>
      <i className="topIcon fa-brands fa-linkedin"></i>
      <i className="topIcon fa-brands fa-instagram-square"></i>
      <i className="topIcon fa-brands fa-twitter-square"></i>

      </div>
      <div  className='topCenter'>
      <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div  className='topRight'>
      {user ? (
          <Link className="link" to="/settings">
             <img className='topImg'
       src={logo} alt="Logo" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      
       <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
