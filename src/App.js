import "./App.css";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import Risks from "./components/Risks";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/risks" component={Risks} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
