import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingImg from './LandingImg';
import About from './About';
import Photo from './Photo';
import Name from "./Name";
import MobileMenu from '../components/MobileMenu';

function App() {
  return (
    <BrowserRouter>
      <main className="app">
        <div className="header">
          <MobileMenu />
          <Name />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={LandingImg} />
            <Route path="/photo" component={Photo} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
