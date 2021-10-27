import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingImg from './LandingImg';
import About from './About';
import Name from './Name';
import Navigation from '../components/Navigation';
import MobileMenu from '../components/MobileMenu';
import Photography from './Photography';

function App() {
  return (
    <BrowserRouter>
      <main className="app">
        <section className="side-content">
          <MobileMenu />
          <Name />
          <Navigation />
        </section>
        <section className="main-content">
          <Switch>
            <Route exact path="/" component={LandingImg} />
            <Route path="/about" component={About} />
            <Route path="/photography" component={Photography} />
          </Switch>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
