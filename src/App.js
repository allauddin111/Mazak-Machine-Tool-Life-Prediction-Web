import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Actual from "./components/Actual";
import Result from "./components/Result";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
 
      <Router>
        <Switch>

          
          <Route exact path="/">
                <Header/>
     <Container/>
     <Footer/>
          </Route>

          <Route exact path="/Actual">
            <Header/>
      <Actual/>
          </Route>
          <Route exact path="/Result">
            <Header/>
      <Result/>
          </Route>

        
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
