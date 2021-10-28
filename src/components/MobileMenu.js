import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function MobileMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const history = useHistory();

  const navClick = (destination) => {
      setMenuOpen(!isMenuOpen);

    history.push(`${destination}`);
  };

  return (
      <section className="mobile-menu-container">
        <button 
            className="mobile-menu-button"
            tabIndex={0}
            role="button"
            onClick={() => setMenuOpen(!isMenuOpen)}
            onKeyPress={() => setMenuOpen(!isMenuOpen)}
        >
            <div className="line"></div>
            <div className="line"></div>
        </button>
        {isMenuOpen &&
            <div className="mobile-menu-open-container">
                <button 
                    className="mobile-menu-button mobile-menu-close-button"
                    tabIndex={0}
                    role="button"
                    onClick={() => setMenuOpen(!isMenuOpen)}
                    onKeyPress={() => setMenuOpen(!isMenuOpen)}
                >
                    <svg height="26" width="26">
                        <line className="line" x1="0" x2="26" y1="26" y2="0" stroke="#000000" stroke-width="2"/>
                        <line className="line" x1="26" x2="0" y1="26" y2="0" stroke="#000000" stroke-width="2"/>
                    </svg>
                </button>
                <section className="mobile-nav-container">
                    <ul className="mobile-nav-items">
                        <li className="primary-nav-header">Work</li>
                        <li className="secondary-nav-header">Coming soon</li>
                        <li className="primary-nav-header">Personal</li>
                        <li className="secondary-nav-header" onClick={() => navClick('/photography')}>Photography</li>
                        <li className="secondary-nav-header" onClick={() => navClick('/about')}>About me</li>
        
                    </ul>
                </section>
            </div>
        }
      </section>

  )

 
}

export default MobileMenu;