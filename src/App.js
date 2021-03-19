import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Destination from './components/Desination/Destination';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/LogIn/Login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <div style={{ marginTop: '70px' }}> */}
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
            <Route path="/destination/:serviceType">
              <Destination />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        {/* </div> */}
      </BrowserRouter>
    </div>
  );
};

export default App;