import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Destination from './components/Desination/Destination';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/LogIn/Login';
import PrivateRoute from './components/PrivateRote/PrivateRoute';

export const UserContext = createContext()

const App = () => {
  const [loggedUser, setLoggedUser] = useState({})
  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <PrivateRoute path="/destination/:serviceType">
            <Destination />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;