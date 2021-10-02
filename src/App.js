import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact'
const  App = ()=> {
  return (
    <>
    <Switch>
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/about" component = {About}/>
      <Route exact path = "/contact" component = {Contact}/>
      <Route exact path = "/service" component = {Services}/>
      <Redirect to = "/"/>
    </Switch>
    </>
  );
}

export default App;
