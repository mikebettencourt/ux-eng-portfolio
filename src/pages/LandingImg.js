import heroImg from '../assets/hero-img.jpg';

function Landing() {
    return (
       <section className="landing-container">
            <div className="img-container">
                <img src={heroImg} alt="landing page"/>
            </div>
       </section>
    )

}

export default Landing;