import HomeButton from "../../components/HomeButton";

function ExamTracking() {
    return (
      <>
        <HomeButton />
        <section className="exam-tracking-container">
          <h1 className="content-header">Perspective, A Lovely Hand To Hold</h1>
          <section className="content-section">
            <p className="content-label">Role/Skills</p>
            <ul className="content-copy">
              <li>Front-end Development</li>
              <li>HTML and CSS</li>
            </ul>
          </section>
          <section className="content-section">
            <p className="content-label">Overview</p>
            <p className="content-copy">
              My good friends in, Perspective, A Lovely Hand To Hold, reached out
              to me to help create a landing page for their band.
              <br />
              <br />
              <a href="https://mikebettencourt.github.io/palhth/"
                 target="_blank"
              >
                Live Site
              </a>
            </p>
          </section>
        </section>
      </>
    );
  }
  
export default ExamTracking;