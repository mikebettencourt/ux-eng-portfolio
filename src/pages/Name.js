import { Link } from 'react-router-dom';

function NameTitleLocation() {
  return (
    <section className="name-title-container">
      <p className="pronouns">he/him/his</p>
        <h1 className="name">
            Michael Bettencourt
        </h1>
      <p className="title">UX Engineer, Photographer</p>
      <p className="location">Boston, MA</p>
    </section>
  )
}

export default NameTitleLocation;