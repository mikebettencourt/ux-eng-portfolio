import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingImg from './LandingImg';
import About from './About';
import Name from './Name';
import Navigation from '../components/Navigation';
import MobileMenu from '../components/MobileMenu';
import Photography from './Photography';
import ExamTracking from './work/ExamTracking';
import Perspective from './work/Perspective';
import Footer from '../components/Footer';
import PATRS from './work/PATRS';

function App() {
  return (
    <BrowserRouter>
      <main className="app">
        <section className="side-content">
          <div className="side-content-container">
            <MobileMenu />
            <Name />
            <Navigation />
            <Footer />
          </div>
        </section>
        <section className="main-content">
          <Switch>
            <Route exact path="/" component={LandingImg} />
            <Route path="/about" component={About} />
            <Route path="/photography" component={Photography} />
            <Route path="/work/exam-tracking" component={ExamTracking} />
            <Route path="/work/patrs-redesign" component={PATRS} />
            <Route path="/work/palhth" component={Perspective} />
          </Switch>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
