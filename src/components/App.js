import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import SearchBar from './SearchBar';
import RestaurantList from './RestaurantList';
import NotFound from './NotFound';
import Footer from './Footer';
import { useAuth0 } from '../react-auth0-spa';
import history from '../utils/history';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const [inputFood, setInputFood] = useState('');
  const [focus, setFocus] = useState(null);

  const handleOutsideClick = e => {
    if (e.target.nodeName !== 'INPUT') {
      setFocus(null);
    }
  };

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Router history={history}>
        <SearchBar
          inputFood={inputFood}
          setInputFood={setInputFood}
          focus={focus}
          setFocus={setFocus}
          handleOutsideClick={handleOutsideClick}
        />
        <Switch>
          <PrivateRoute
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                setInputFood={setInputFood}
                handleOutsideClick={handleOutsideClick}
              />
            )}
          />
          <PrivateRoute
            path="/search/:termID/:locID/:pageID"
            render={props => (
              <RestaurantList
                {...props}
                handleOutsideClick={handleOutsideClick}
              />
            )}
          />
          <PrivateRoute
            render={props => (
              <NotFound {...props} handleOutsideClick={handleOutsideClick} />
            )}
          />
        </Switch>
        <Footer handleOutsideClick={handleOutsideClick} />
      </Router>
    </div>
  );
};

export default App;
