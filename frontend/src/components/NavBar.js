import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { ImCancelCircle } from "react-icons/im";

const NavBar = () => {
  const { user } = useAuthContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIsOpen(!isOpen);
  };

  const { logout } = useLogout();
  const handleLogout = (e) => {
    logout();
  };

  return (
    <>
      <nav className="navbar">
        <div>
          <Link to="/">
            <svg
              width="65"
              height="40"
              viewBox="0 0 65 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.2072 0L32.4211 7.88354L21.626 0L0 15.794V40H12.551V34.6876H5.31243V18.4994L21.626 6.58455L27.9059 11.1713L21.5722 15.794V40H30.1008H36.6853H43.252V15.794L36.9183 11.1713L43.1982 6.58455L59.5118 18.4994V34.6876H51.6909V40H64.8421V15.794L43.2072 0ZM37.9395 18.4994V34.6876H36.6943H30.1097H26.8936V18.4994L32.4121 14.4681L37.9395 18.4994Z"
                fill="#091638"
              />
            </svg>
          </Link>
        </div>
        <div className="meniu">
          <ul>
            <NavLink to="/">
              <li>Pagrindinis</li>
            </NavLink>
            <NavLink to='/about' className="test">
            <li>Apie</li>
          </NavLink>
            <NavLink to="/home-houses">
              <li>Skelbimai</li>
            </NavLink>
            {user && (
              <NavLink to="/rezervacijos">
                <li>Mano rezervacijos</li>
              </NavLink>
            )}
            {user && user.isAdmin && (
              <>
                <NavLink to="/create-form">
                  <li>Sukurti skelbimą</li>
                </NavLink>
                <NavLink to="/orders" className="test">
                <li>Užsakymai</li>
                </NavLink>
              </>
            )}
          </ul>
        </div>
        <div className="mygtukai">
          {user ? (
            <>
              <span>
                <strong>{user.isAdmin ? "Admin" : user.email} </strong>
              </span>
              <button onClick={handleLogout}>Atsijungti</button>
            </>
          ) : (
            <div className="login">
              <Link to="/login">
                <button className="prisijungti">Prisijungti</button>
              </Link>
              <Link to="/signup">
                <button className="registruotis">Registruotis</button>
              </Link>
            </div>
          )}
        </div>

        <div className="burgeris" onClick={toggleMenu}>
          {menuOpen ? (
            <ImCancelCircle className="burgeris" />
          ) : (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
            </svg>
          )}
        </div>
      </nav>
      {isOpen && (
        <div className="mobile-navbar">
          <Link to="/" className="test">
            <p className="link">Pagrinidis</p>
          </Link>
          <Link to='/about' className="test">
          <p className="link">Apie</p>
          </Link>
          <Link to="/home-houses" className="test">
            <p className="link">Skelbimai</p>
          </Link>
          {user && (
              <Link to="/rezervacijos" className="test">
                <p className="link">Mano rezervacijos</p>
              </Link>
            )}
          {user && user.isAdmin && (
            <>
              <Link to="/create-form" className="test">
                <p className="link">Sukurti skelbimą</p>
              </Link>
              <Link to="/orders" className="test">
                <p className="link">Užsakymai</p>
              </Link>
            </>
          )}

          <div className="mygtukai2">
            {user ? (
              <>
                <span>
                  <strong>{user.isAdmin ? "Admin" : user.email} </strong>
                </span>
                <button onClick={handleLogout}>Atsijungti</button>
              </>
            ) : (
              <div className="login2">
                <Link to="/login">
                  <button className="prisijungti">Prisijungti</button>
                </Link>
                <Link to="/signup">
                  <button className="registruotis">Registruotis</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
