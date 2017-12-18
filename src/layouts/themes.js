import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const getSelectedTheme = () => {
    props.selectTheme(props.theme);
  };

  return (
    <button
      className={props.isActive ? 'selected' : ''}
      data-theme={props.theme}
      onClick={() => {
        getSelectedTheme();
      }}
    >
      {props.text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  selectTheme: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const Themes = props => (
  <div className="themes">
    <p>Available Gridfolio Themes</p>
    {props.themes.map(theme => (
      <Button
        key={theme}
        isActive={props.activeTheme === theme}
        selectTheme={props.selectTheme}
        text={theme}
        theme={theme}
      />
    ))}
  </div>
);

Themes.propTypes = {
  selectTheme: PropTypes.func.isRequired,
  activeTheme: PropTypes.string.isRequired,
  themes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Themes;
