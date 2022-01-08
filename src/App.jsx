import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import "./App.css";
import Navbar from "./Navbar";

import { Switch, Route } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
