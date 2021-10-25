import React, {useState} from 'react'
import Home from './pages/home/Home.js'
import Navbar from './components/navbar/Navbar.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Team from "./pages/team/Team"
import Hero from './components/hero/Hero.js';

export const VisibilityContext = React.createContext()

const App = () => {

    const [visibility, setVisibility] = useState(false)
    const value = {visibility, setVisibility}

    console.log(visibility)
    // console.log("check")

    return (
      <VisibilityContext.Provider value={value}>
        <Router>
          <Navbar visibility={visibility} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/team">
              {/* <Home></Home> */}
              <Team></Team>
            </Route>
          </Switch>
        </Router>
      </VisibilityContext.Provider>
    );

}

export default App