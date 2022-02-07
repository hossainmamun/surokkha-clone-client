import Home from './Components/Home/Home.js';
import './StyleSheet/Main.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Components/Shared/Navbar.js';
import Enroll from './Components/RoutePage/Enroll.js';
import Footer from './Components/Shared/Footer.js';
import RegWithNid from './Components/RoutePage/RegWithNid.js';
import RegWithBirth from './Components/RoutePage/RegWithBirth.js';
import VaccineStatus from './Components/RoutePage/VaccineStatus.js';
import VaccineCard from './Components/RoutePage/VaccineCard.js';
import RegList from './Components/RoutePage/RegList.js';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/RoutePage/PrivateRoute.js';
import Account from './Components/Firebase_Account/Account.js';
import RegWithPassport from './Components/RoutePage/RegWithPassport.js';
import Faq from './Components/RoutePage/Faq.js';

export const globalUser = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <globalUser.Provider value={[loggedInUser, setLoggedInUser]} className="Main.scss">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>

          {/* route page */}
          <Route path="/enroll">
            <Enroll />
          </Route>
          <Route path='/enroll/regNationalId'>
            <RegWithNid />
          </Route>
          <Route path='/enroll/regBirthCertificate'>
            <RegWithBirth />
          </Route>
          <Route path='/enroll/regPassport'>
            <RegWithPassport/>
          </Route>
          <Route path="/vaccine-status">
            <VaccineStatus />
          </Route>
          <Route path="/vaccine-card">
            <VaccineCard />
          </Route>
          <Route path="/faq">
            <Faq/>
          </Route>
          <PrivateRoute path="/registration-list">
            <RegList />
          </PrivateRoute>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </globalUser.Provider>
  );
}

export default App;
