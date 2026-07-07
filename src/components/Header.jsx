import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faTags } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const navLinkClass =
    'text-center text-lg font-primary font-semibold text-primary py-2';
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="link">
          <FontAwesomeIcon icon={faTags} className="faIcon" />
          <span className="brand-title">Eazy Stickers</span>
        </a>
        <nav className="nav">
          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? `underline ${navLinkClass}` : navLinkClass
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? `underline ${navLinkClass}` : navLinkClass
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? `underline ${navLinkClass}` : navLinkClass
                }
              >
                contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? `underline ${navLinkClass}` : navLinkClass
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="nav-link">
                <FontAwesomeIcon icon={faShoppingBasket} />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
