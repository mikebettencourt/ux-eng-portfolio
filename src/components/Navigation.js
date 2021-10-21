import { useHistory } from 'react-router-dom';

function Navigation() {
  const history = useHistory();

  const navClick = (destination) => {
    history.push(`${destination}`);
  };

  return (
    <section className="nav-container">
        <ul className="nav-items">
            <li className="primary-nav-header">Work</li>
            <li className="secondary-nav-header">Case 1</li>
            <li className="secondary-nav-header">Case 2</li>
            <li className="secondary-nav-header">Case 3</li>
            <li className="primary-nav-header" 
                onClick={() => navClick('/about')}
            >
              About
            </li>
        </ul>
    </section>
  )
}

export default Navigation;