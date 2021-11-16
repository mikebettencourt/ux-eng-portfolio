import HomeButton from "../../components/HomeButton";

function ExamTracking() {
    return (
      <>
        <HomeButton />
        <section className="exam-tracking-container">
          <h1 className="content-header">Actuarial Exam Tracking</h1>
          <section className="content-section">
            <p className="content-label">Role</p>
            <ul className="content-copy">
              <li>UX/UI Design</li>
              <li>Research</li>
              <li>Facilitator</li>
              <li>Full Stack Development</li>
            </ul>
          </section>
          <section className="content-section">
            <p className="content-label">Collaborators</p>
            <ul className="content-copy">
              <li>Product Owner</li>
              <li>Development Squad</li>
              <li>Actuarial Development Program Managers</li>
              <li>Actuarial Students</li>
            </ul>
          </section>
          <section className="content-section">
            <p className="content-label">Overview</p>
            <p className="content-copy">
            The journey to becoming an actuary at Liberty Mutual, and anywhere else really, is extensive. Actuarial candidates are required to pass a series of exams to become credentialed property and casualty actuaries. This process can take nearly 10 years and during this time, actuary candidates (we like to call them students) are continuously studying and prepping for exams, all while managing their regular work load.
            </p>
          </section>
          <div className="content-divider"></div>
          <section className="content-section">
            <p className="content-label">Problem</p>
            <p className="content-copy">
            Do actuarial students have a place to track and manage the progress of their current exams today? The answer is: yes. Is that solution effective and helpful? The answer is: not always. Currently, the system, referred to as the Actuarial Resource Center, is out of date and will be retired by January 2023. The experience of the tool today involves many manual and duplicative tasks. Additionally, the data within the current application is inaccurate and lacks many mechanisms to provide real-time support. Not to mention, the application is written in C#, an outdated programming language that we don’t support and frankly, don’t know.
            </p>
          </section>
          <section className="content-section">
            <p className="content-label">Process</p>
            <p className="content-copy">
            <p><i>Discovery</i></p>
            In order to understand the problem at hand, we first meet with our business stakeholders to gain further insight into issues users are facing, strategic initiatives, and to explore other system requirements. 
            </p>
          </section>
          <section className="content-section">
            <p className="content-label">Challenges</p>
            <p className="content-copy">
            With any new development effort, there are challenges. Our business partners went through a lot of organizational change over the last year. This spawned a bit of uncertainty around prioritization but ultimately, our team was able to keep focus and continue on this effort. Our team is also responsible for applications supporting the year-end performance and merit cycle. These applications require the development team’s full attention, therefore, our work on the new exam tracking solution was halted as we pivoted to support our year-end applications. Lastly, with continuous communication between myself, developers, product owners, and business stakeholders, we were able to pick up right where we left off. As the year-end cycle slows down, our exam tracking work will pick up again.
            </p>
          </section>
        </section>
      </>
    );
  }
  
export default ExamTracking;