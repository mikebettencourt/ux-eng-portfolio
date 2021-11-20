import { useHistory } from 'react-router-dom';

function NameTitleLocation() {
  const history = useHistory();

  const headerClick = (destination) => {
    history.push('/');
  };

  return (
    <section className="name-title-container">
      <h1 className="name"
          role="button"
          tabIndex={0}
          onKeyPress={headerClick}
          onClick={headerClick}
      >
          Mike Bettencourt
      </h1>
      <p className="pronouns">he/him/his</p>
      <p className="title">UX Engineer</p>
      <p className="location">Boston, MA</p>
    </section>
  )
}

export default NameTitleLocation;