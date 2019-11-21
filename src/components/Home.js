import React from 'react';
import PropTypes from 'prop-types';
//import styled from 'styled-components';
//import { animated, useSprings } from 'react-spring';

const Home = ({ setInputFood, handleOutsideClick }) => {
  return (
    <div className="App">
      <h1>Welcome to the Homepage.</h1>
      <h3>Please search the restaurant or type of food and the city.</h3>
      <h3>This site utilizes the yelp fusion API for the data. </h3>
      <h3>Leaflet js is utilized for the mapping aspect of the site. </h3>
      <h3>
        Press the The Restaurant Search link on the Navbar to go to the home
        page.{' '}
      </h3>
      <h3>
        The best way to view this site is from your desktop or labtop to get the
        full effect of the map.{' '}
      </h3>
      <br />
      <h3>Check out Resources below: </h3>
      <br />
      <h3 className="Link">
        100 spots to eat according to Yelp ranking
        <br />
        <a
          style={{ color: 'black' }}
          href="https://blog.yelp.com/2019/03/top-100-places-to-eat-in-texas-according-to-yelp"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          https://blog.yelp.com/2019/03/top-100-places-to-eat-in-texas-according-to-yelp/
        </a>
      </h3>
      <br />
      <h3 className="Link">
        A list of best restaurants in Texas according to eater.com.
        <a
          style={{ color: 'black' }}
          href="https://www.eater.com/2018/3/7/17065442/best-restaurants-texas-bill-addison"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <br />
          https://www.eater.com/2018/3/7/17065442/best-restaurants-texas-bill-addison
        </a>
      </h3>
      <br />
      <h3 className="Link">
        A list of best restaurants in Texas according to eater.com.
        <a
          style={{ color: 'black' }}
          href="https://www.thedailymeal.com/101-best-restaurants-america"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <br />
          https://www.thedailymeal.com/101-best-restaurants-america
        </a>
      </h3>
      <br />
      <h3 className="Link">
        A list of best restaurants in the US according to eater.com
        <a
          style={{ color: 'black' }}
          href="https://www.eater.com/best-american-restaurants-review/2018/11/13/18071890/best-restaurants-america-2018"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <br />
          https://www.eater.com/best-american-restaurants-review/2018/11/13/18071890/best-restaurants-america-2018
        </a>
      </h3>
      <br />
      <h3 className="Link">
        A list of best restaurants in Dallas, Tx based on dmagazine.com.
        <a
          style={{ color: 'black' }}
          href="https://interactive.dmagazine.com/best-dallas-restaurants-right-now/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <br />
          https://interactive.dmagazine.com/best-dallas-restaurants-right-now/
        </a>
      </h3>
      <br />
      <h3 className="Link">
        A list of the best diners in the US.
        <a
          style={{ color: 'black' }}
          href="https://www.thrillist.com/eat/nation/the-best-diners-in-america-classic-american-diners-24-hour-diners"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <br />
          https://www.thrillist.com/eat/nation/the-best-diners-in-america-classic-american-diners-24-hour-diners
        </a>
      </h3>
      <br />
      <h3 className="Link">
        A list of the best seafood places in the US.
        <a
          style={{ color: 'black' }}
          href="https://blog.cheapism.com/best-seafood-18162/#slide=10"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <br />
          https://blog.cheapism.com/best-seafood-18162/#slide=10
        </a>
      </h3>
      <br />
      <h3 className="Link">
        Best barbeque places in the South according to Southern Living.
        <a
          style={{ color: 'black' }}
          href="https://www.southernliving.com/travel/bbq-restaurants"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <br />
          https://www.southernliving.com/travel/bbq-restaurants
        </a>
      </h3>
      <br />
      <h3 className="Link">
        33 top barbeque places in America according to Thrillist.com.
        <a
          style={{ color: 'black' }}
          href="https://www.thrillist.com/eat/nation/best-bbq-in-america"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <br />
          https://www.thrillist.com/eat/nation/best-bbq-in-america
        </a>
      </h3>
      <br />
      <h3 className="Link">
        101 top casual restaurants in America according to thedailymeal.com.
        <a
          style={{ color: 'black' }}
          href="https://www.thedailymeal.com/101-best-casual-restaurants-america-2019"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <br />
          https://www.thedailymeal.com/101-best-casual-restaurants-america-2019
        </a>
      </h3>
      <br />
      <h3 className="Link">
        Top fifty fried-food places according to the food network.
        <a
          style={{ color: 'black' }}
          href="https://www.foodnetwork.com/restaurants/photos/best-fried-food-america"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <br />
          https://www.foodnetwork.com/restaurants/photos/best-fried-food-america
        </a>
      </h3>
      <br />
      <h3 className="Link">
        The Best restaurants in small towns according to tasteofhome.com.
        <a
          style={{ color: 'black' }}
          href="https://www.tasteofhome.com/collection/best-small-town-restaurants-in-america/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <br />
          https://www.tasteofhome.com/collection/best-small-town-restaurants-in-america/
        </a>
      </h3>
      <br />
      <h3 className="Link">
        A list of scenic restaurants according to OpenTable.
        <a
          style={{ color: 'black' }}
          href="https://www.theeasttexasweekend.com/100-most-scenic-restaurants-in-america-east-texas-makes-the-list/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <br />
          https://www.theeasttexasweekend.com/100-most-scenic-restaurants-in-america-east-texas-makes-the-list/
        </a>
      </h3>
      <br />
      <h3 className="Link">
        A list of scenic restaurants according to OpenTable.
        <a
          style={{ color: 'black' }}
          href="https://www.theeasttexasweekend.com/100-most-scenic-restaurants-in-america-east-texas-makes-the-list/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <br />
          https://www.theeasttexasweekend.com/100-most-scenic-restaurants-in-america-east-texas-makes-the-list/
        </a>
      </h3>
      <br />
      <h3 className="Link">
        A list of the best breakfast destinations.
        <a
          style={{ color: 'black' }}
          href="https://www.myrecipes.com/extracrispy/51-of-the-best-breakfast-destinations-in-america"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <br />
          https://www.myrecipes.com/extracrispy/51-of-the-best-breakfast-destinations-in-america
        </a>
      </h3>
      <br />
      <h3 className="Link">
        A list of the best places to get waffles in the US according to food
        network.
        <a
          style={{ color: 'black' }}
          href="https://www.foodnetwork.com/restaurants/photos/best-waffles-in-the-country"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <br />
          https://www.foodnetwork.com/restaurants/photos/best-waffles-in-the-country
        </a>
      </h3>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

Home.propTypes = {
  setInputFood: PropTypes.func.isRequired,
  handleOutsideClick: PropTypes.func.isRequired
};

export default Home;

/*
const options = {
    sushi: <SushiSVG className="option__icon" />,
    tacos: <TacosSVG className="option__icon" />,
    pizza: <PizzaSVG className="option__icon" />,
    pasta: <PastaSVG className="option__icon" />,
    thai: <ThaiSVG className="option__icon" />,
    american: <AmericanSVG className="option__icon" />,
    mediterranean: <MediSVG className="option__icon" />,
    french: <FrenchSVG className="option__icon" />,
    bbq: <BbqSVG className="option__icon" />,
    vegan: <VeganSVG className="option__icon" />,
    waffles: <WafflesSVG className="option__icon" />,
    dessert: <DessertSVG className="option__icon" />
  };

  const [springs] = useSprings(Object.keys(options).length, i => ({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: `${i * 50}`,
    config: { friction: 100 }
  }));

  const renderOptionList = Object.keys(options).map((option, i) => {
    const uppercaseOption =
      option === 'bbq'
        ? option.toUpperCase()
        : option.slice(0, 1).toUpperCase() + option.slice(1);
    return (
      <animated.div
        key={i}
        className="option"
        onClick={() => setInputFood(uppercaseOption)}
        style={springs[i]}
        data-testid="food-option"
      >
        {options[option]}
        <span className="option__name" data-testid="food-option-name">
          {uppercaseOption}
        </span>
      </animated.div>
    );
  });
*/
