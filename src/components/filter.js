import React from 'react';
import PropTypes from 'prop-types';

import './filter.scss';

const Toggles = {
  vertical: ['Automotive', 'Entertainment', 'Food & Drink', 'Technology'],
  feature: ['Google Maps', 'Dynamic', 'API Driven', 'Geo-Location', 'Weather'],
  format: ['Standard', 'YouTube Masthead', 'Mobile'],
};

const FilterToggles = props => (
  <ul className="filter-toggles">
    {Object.keys(props.dropdowns).map(key => (
      <li className="filter-toggle" key={key} data-dropdown={key}>
        {key}
      </li>
    ))}
  </ul>
);

FilterToggles.propTypes = {
  dropdowns: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

const FilterDropdowns = props => (
  <div className="filter-dropdown">
    <div className="filter-dropdown-bg" />
    {Object.keys(props.dropdowns).map(key => (
      <div className="filter-dropdown-menu" key={key} id={key}>
        <ul>
          {props.dropdowns[key].map(option => (
            <li>
              <a href="#">{option}</a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

FilterDropdowns.propTypes = {
  dropdowns: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

const Filter = () => (
  <div className="filter">
    <p
      style={{
        fontSize: 13,
        paddingBottom: '0.25em',
      }}
    >
      Filter by:
    </p>
    <div className="filter-options">
      <FilterToggles dropdowns={Toggles} />
      <input type="text" className="filter-search" placeholder="Search" />
    </div>
    <FilterDropdowns dropdowns={Toggles} />
  </div>
);

export default Filter;
