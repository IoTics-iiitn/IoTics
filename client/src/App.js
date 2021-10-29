import React, {useState} from 'react'
import Home from './pages/home/Home.js'
import Navbar from './components/navbar/Navbar.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Team from "./pages/team/Team"
import Footer from './components/footer/Footer.js';

export const VisibilityContext = React.createContext()

const App = () => {

    const [visibility, setVisibility] = useState(false)
    const value = {visibility, setVisibility}

    // console.log(visibility)
    // console.log("check")

    return (
      <VisibilityContext.Provider value={value}>
        <Router>
          <Navbar visibility={visibility} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/ourTeam">
              <Team></Team>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </VisibilityContext.Provider>
    );

}

export default App