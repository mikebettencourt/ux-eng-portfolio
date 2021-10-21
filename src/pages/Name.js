import { useHistory } from 'react-router-dom';

function NameTitleLocation() {
  const history = useHistory();

  const headerClick = (destination) => {
    history.push('/');
  };

  return (
    <section className="name-title-container">
      <p className="pronouns">he/him/his</p>
        <h1 className="name"
            role="button"
            onClick={headerClick}
        >
            Michael Bettencourt
        </h1>
      <p className="title">UX Engineer</p>
      <p className="location">Boston, MA</p>
    </section>
  )
}

export default NameTitleLocation;