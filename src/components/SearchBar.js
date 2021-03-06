import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { useAuth0 } from '../react-auth0-spa';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUtensils,
  faMapMarkerAlt,
  faSearch,
  faLocationArrow
} from '@fortawesome/free-solid-svg-icons';
import { createSearchSlug } from '../helper';

const Header = styled.header`
  position: relative;
  background: royalblue;

  .header__title {
    color: white;
    margin: 0;
    padding: 0.5rem 0 0 0;
    text-align: center;
  }
  .header__title2 {
    color: white;
    margin: 0;
    padding: 0.5rem 0 0 0;
    justify-content: left;
  }

  .form {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .form__input-food-container,
  .form__input-user-location-container {
    position: relative;
    width: 100%;
  }

  .form__icon-utensils,
  .form__icon-marker {
    position: absolute;
    top: 7px;
    left: 10px;
    font-size: 20px;
    color: black;
  }

  .form__input-food,
  .form__input-user-location {
    padding: 0.5rem 1rem 0.5rem 35px;
    border-radius: 5px;
    margin-bottom: 0.5rem;
    border-radius: 10px;
    border: 1px solid #dddddd;
    font-size: 16px;
    width: 100%;
  }

  .form__button {
    border-radius: 10px;
    padding: 0.5rem 1rem;
    margin: 0 auto;
    color: white;
    background: ${props => (props.isLoadingLocation ? 'grey' : 'var(--red)')};
    border: 1px lightgrey solid;
    width: 100%;
    transition: background 0.2s ease-in-out;
  }

  .form__button:active {
    background: var(--lightred);
  }

  .form__button-icon {
    margin-right: 1rem;
  }

  .form__food-list,
  .form__user-location-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 140px;
    width: 100%;
    background: white;
    z-index: 2;
    cursor: pointer;
    border-bottom: 1px lightgrey solid;
  }

  .form__user-location-list {
    top: 96px;
  }

  .form__food-list {
    display: ${props =>
      props.focus === 'form__input-food' ? 'block' : 'none'};
  }

  .form__user-location-list {
    display: ${props =>
      props.focus === 'form__input-user-location' ? 'block' : 'none'};
  }

  .form__food-item:first-child,
  .form__user-location-item:first-child {
    border-top: 1px lightgrey solid;
  }

  .form__food-item,
  .form__user-location-item {
    padding: 0.5rem 1rem;
  }

  .form__icon-arrow {
    color: blue;
  }

  .form__current-location {
    color: blue;
    padding-left: 0.5rem;
  }

  @media screen and (min-width: 901px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .header__title {
      padding: 0;
    }

    .form {
      display: flex;
      flex-direction: row;
    }

    .form__input-food,
    .form__input-user-location {
      margin-bottom: 0;
      min-width: 315px;
      border: transparent;
    }

    .form__input-food {
      border-radius: 5px 0 0 5px;
    }

    .form__input-user-location {
      border-radius: 0;
      border-right: 0;
      border-left: 1px lightgrey solid;
    }

    .form__button {
      width: auto;
      border-radius: 0 5px 5px 0;
      border: 0;
      color: white;
    }

    .form__button-icon {
      margin: 0;
    }

    .form__button-text {
      display: none;
    }

    .form__food-list,
    .form__user-location-list {
      top: 34px;
      width: 315px;
      border-left: 1px lightgrey solid;
      border-right: 1px lightgrey solid;
    }
  }

  @media (hover: hover) {
    .form__food-item:hover,
    .form__user-location-item:hover {
      background: linear-gradient(135deg, var(--red), var(--orange));
      color: white;
    }

    .form__user-location-item:hover .form__current-location {
      color: white;
    }

    .form__user-location-item:hover .form__icon-arrow {
      color: white;
    }

    .form__button:hover {
      background: ${props =>
        props.isLoadingLocation ? 'grey' : 'var(--darkred)'};
    }

    .form__button:active {
      background: ${props =>
        props.isLoadingLocation ? 'grey' : 'var(--lightred)'};
    }
  }
`;

const SearchBar = ({
  history,
  inputFood,
  setInputFood,
  focus,
  setFocus,
  handleOutsideClick
}) => {
  const [inputLocation, setInputLocation] = useState('');
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const springProps = useSpring({
    to: { opacity: 1, transform: `scale(1)` },
    from: { opacity: 0, transform: `scale(0.75)` },
    config: { duration: 250 }
  });

  const locationSuccess = position => {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
    setInputLocation('Current Location');
    setIsLoadingLocation(false);
  };

  const locationError = err => {
    setInputLocation('Error finding location, try a new spot.');
    setIsLoadingLocation(false);
    //console.log(err.message)
  };

  const handleUserLocationClick = e => {
    const text = e.target.textContent;
    if (text === 'Current Location' || text === '') {
      setIsLoadingLocation(true);
      setInputLocation('Finding your location...');
      navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
    } else {
      setInputLocation(text);
    }
  };

  const handleFormSubmit = () => {
    const isValid = inputFood !== '' && inputLocation !== '';
    if (isValid) {
      const searchSlug = createSearchSlug(inputFood, inputLocation, lat, lon);
      // Hide suggestion lists and navigate to the results page
      setFocus(null);
      history.push(searchSlug);
    } else {
      // TODO: Potentially display error message
    }
  };

  return (
    <Header
      isLoadingLocation={isLoadingLocation}
      focus={focus}
      onClick={handleOutsideClick}
    >
      <Link className="header__link" to="/">
        <animated.h1 style={springProps} className="header__title">
          The Restaurant Search App
        </animated.h1>
      </Link>
      <form className="form" onSubmit={e => e.preventDefault()}>
        <div className="form__input-food-container">
          <FontAwesomeIcon className="form__icon-utensils" icon={faUtensils} />
          <input
            className="form__input-food"
            type="text"
            placeholder="Type in a type of food or restaurant?"
            value={inputFood}
            onChange={e => setInputFood(e.target.value)}
            onFocus={e => setFocus(e.target.classList.value)}
          />
          <ul
            className="form__food-list"
            onClick={e => {
              setInputFood(e.target.textContent);
              setFocus(null);
            }}
          >
            <li className="form__food-item">Seafood</li>
            <li className="form__food-item">Burgers</li>
            <li className="form__food-item">Tacos</li>
            <li className="form__food-item">Pizza</li>
            <li className="form__food-item">Pasta</li>
            <li className="form__food-item">American</li>
            <li className="form__food-item">Chinese</li>
            <li className="form__food-item">Mexican</li>
            <li className="form__food-item">Italian</li>
            <li className="form__food-item">BBQ</li>
            <li className="form__food-item">Indian</li>
            <li className="form__food-item">Cajun</li>
            <li className="form__food-item">Crawfish</li>
          </ul>
        </div>
        <div className="form__input-user-location-container">
          <FontAwesomeIcon
            className="form__icon-marker"
            icon={faMapMarkerAlt}
          />
          <input
            className="form__input-user-location"
            type="text"
            placeholder="City, neighborhood, zipcode, etc."
            value={inputLocation}
            onChange={e => setInputLocation(e.target.value)}
            onFocus={e => setFocus(e.target.classList.value)}
          />
          <ul
            className="form__user-location-list"
            onClick={e => {
              handleUserLocationClick(e);
              setFocus(null);
            }}
          >
            <li className="form__user-location-item">
              <FontAwesomeIcon
                className="form__icon-arrow"
                icon={faLocationArrow}
              />
              <span className="form__current-location">Current Location</span>
            </li>
            <li className="form__user-location-item">Dallas, TX</li>
            <li className="form__user-location-item">Los Angeles, CA</li>
            <li className="form__user-location-item">Miami, FL</li>
            <li className="form__user-location-item">Nashville, TN</li>
            <li className="form__user-location-item">Boston, MA</li>
            <li className="form__user-location-item">Seattle, WA</li>
            <li className="form__user-location-item">Kansas City, MO</li>
            <li className="form__user-location-item">Austin, TX</li>
            <li className="form__user-location-item">Houston, TX</li>
          </ul>
        </div>
        <button
          data-testid="form-button"
          className="form__button"
          type="submit"
          disabled={isLoadingLocation}
          onClick={() => handleFormSubmit()}
          onFocus={() => setFocus(null)}
        >
          <FontAwesomeIcon className="form__button-icon" icon={faSearch} />
          <span className="form__button-text">Search</span>
        </button>
      </form>
      <div>
        {!isAuthenticated && (
          <button onClick={() => loginWithRedirect({})}>Log in</button>
        )}

        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      </div>
    </Header>
  );
};

SearchBar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
  inputFood: PropTypes.string,
  setInputFood: PropTypes.func.isRequired,
  focus: PropTypes.string,
  setFocus: PropTypes.func.isRequired,
  handleOutsideClick: PropTypes.func.isRequired
};

export default withRouter(SearchBar);
