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
                onClick={() => navClick('/work/exam-tracking')}
            >
              Exam Tracking
            </li>
            <li className="secondary-nav-header"
                onClick={() => navClick('/work/palhth')}
            >
              Perspective, A Lovely Hand To Hold
            </li>
            <li className="primary-nav-header">Personal</li>
            <li className="secondary-nav-header" 
                onClick={() => navClick('/photography')}
            >
              Photography
            </li>
            <li className="secondary-nav-header"
                onClick={() => navClick('/about')}
            >
              About me
            </li>
        </ul>
    </section>
  )
}

export default Navigation;