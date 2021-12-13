import { useHistory } from 'react-router-dom';
import resume from '../assets/docs/MB_resume.pdf';

function Navigation() {
  const history = useHistory();

  const navClick = (destination) => {
    history.push(`${destination}`);
  };

  return (
    <section className="nav-container">
        <ul className="nav-items">
          <li className="secondary-nav-header about-me"
              role="button"
              tabIndex={0}
              onClick={() => navClick('/about')}
              onKeyPress={() => navClick('/about')}
          >
            About
          </li>
          <li className="secondary-nav-header">
            <a href={resume} target="_blank" rel="noreferrer">Resume</a>
          </li>
          <li className="primary-nav-header">
            <h5>Work</h5>
          </li>
          <li className="secondary-nav-header"
              role="button"
              tabIndex={0}
              onClick={() => navClick('/work/exam-tracking')}
              onKeyPress={() => navClick('/work/exam-tracking')}
          >
            Exam Tracking
          </li>
          <li className="secondary-nav-header"
              role="button"
              tabIndex={0}
              onClick={() => navClick('/work/palhth')}
              onKeyPress={() => navClick('/work/palhth')}
          >
            Perspective, A Lovely Hand To Hold
          </li>
          <li className="secondary-nav-header" 
              role="button"
              tabIndex={0}
              onClick={() => navClick('/photography')}
              onKeyPress={() => navClick('/photography')}
          >
            Photography
          </li>
        </ul>
    </section>
  )
}

export default Navigation;