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
            <li className="secondary-nav-header" 
                onClick={() => navClick('/photography')}
            >
              Photography
            </li>
            <li className="primary-nav-header">About</li>
            <li className="secondary-nav-header"
                onClick={() => navClick('/about')}
            >
              Who Am I?
            </li>
        </ul>
    </section>
  )
}

export default Navigation;