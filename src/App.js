import { Redirect, Route, Switch } from 'react-router';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './components/Navbar';
import Footer from './Footer';
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Services} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
