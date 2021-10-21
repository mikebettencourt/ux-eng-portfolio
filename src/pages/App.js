import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingImg from './LandingImg';
import About from './About';
import Name from "./Name";
import Navigation from '../components/Navigation';
import MobileMenu from '../components/MobileMenu';

function App() {
  return (
    <BrowserRouter>
      <main className="app">
        <section className="header">
          <MobileMenu />
          <Name />
          <Navigation />
        </section>
        <section className="content">
          <Switch>
            <Route exact path="/" component={LandingImg} />
            <Route path="/about" component={About} />
          </Switch>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
