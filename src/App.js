import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import BackToHome from './components/back-to-home/back-to-home.component'
import { Switch, Route } from "react-router-dom";

const HatsPage = (props) => {
  return (
    <div>
      <h1>HATS PAGE</h1>
      <BackToHome/>
    </div>
  );
};

const JacketsPage = (props) => {
  return (
    <div>
      <h1>JACKETS PAGE</h1>
      <BackToHome/>
    </div>
  );
};

const SneakersPage = (props) => {
  return (
    <div>
      <h1>SNEAKERS PAGE</h1>
      <BackToHome/>
    </div>
  );
};


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop/hats" component={HatsPage}></Route>
        <Route path="/shop/jackets" component={JacketsPage}></Route>
        <Route exact path="/shop/sneakers" component={SneakersPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
