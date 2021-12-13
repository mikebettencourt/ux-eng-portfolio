import HomeButton from "../components/HomeButton";
import self from '../assets/photos/self_portrait.JPG';

function About() {
    return (
      <section className="about-container">
        <HomeButton />
        <div className="about-container-content">
          <img src={self} alt="self portrait"/>
          <p className="headline">
              What the heck is a UX Engineer? Imagine a swiss army knife that dabbles in 
              research, design, and frontend development.
          </p>
          <p className="copy">
            Hi, I’m Mike and you guessed it… I am a UX Engineer based in the Greater Boston area. 
            Currently I work for Liberty Mutual, designing and building applications to support their global 
            employee base of 50,000 people. 
            <br />
            <br />
            A few years after working as a full stack software engineer, I 
            realized there was a gap between the development team and our users. After a few conversations with 
            my manager, I took it upon myself to learn more about the general UX Design process. Since then, 
            I have been able to use that knowledge to facilitate a number of collaborative workshops between users, 
            subject matter experts, and business stakeholders to ensure our applications function seamlessly. 
            My full stack development skills also allow me to join the development team once our prototypes have been 
            tested and validated. To me, this is the most rewarding effort; realizing an idea to production.
            <br />
            <br />
            In my free time, I love to explore new areas to photograph, snowboard, play hockey, and anything else 
            that gets me moving and out of my apartment. 
            <br />
            <br />
            Reach out if you’d like to learn more and start a conversation. Also, if you'd like to see how I built my portfolio,
            you can check out my <a href="https://github.com/mikebettencourt/ux-eng-portfolio" target="_blank" rel="noreferrer">GitHub</a>.
          </p>
        </div>
      </section>
    );
  }
  
  export default About;