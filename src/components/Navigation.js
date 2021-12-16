import { useHistory } from 'react-router-dom';

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
          <li className="secondary-nav-header"
              role="button"
              tabIndex={0}
              onClick={() => window.open(`${process.env.PUBLIC_URL}/MB_resume.pdf`, '_blank')}
              onKeyPress={() => window.open(`${process.env.PUBLIC_URL}/MB_resume.pdf`, '_blank')}
          >
            Resume
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
            Actuarial Exam Tracking
          </li>
          <li className="secondary-nav-header"
              role="button"
              tabIndex={0}
              onClick={() => navClick('/work/patrs-redesign')}
              onKeyPress={() => navClick('/work/patrs-redesign')}
          >
            Performance and Talent Review - Redesign
          </li>
          <li className="secondary-nav-header"
              role="button"
              tabIndex={0}
              onClick={() => navClick('/work/open-ai')}
              onKeyPress={() => navClick('/work/open-ai')}
          >
            OpenAI Landing Page
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