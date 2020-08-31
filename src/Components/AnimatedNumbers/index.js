import React from 'react';
import FlipNumbers from 'react-flip-numbers';
import PropTypes from 'prop-types';
import './style.css';

const Index = ({ className, numbers }) => {
  return (
    <div className={ `animated__numbers ${className}` }>
      <FlipNumbers height={ 12 } width={ 12 } color="" background="" play perspective={ 100 } numbers={ numbers } />
    </div>
  );
};

Index.propTypes = {
  className: PropTypes.string,
  numbers: PropTypes.string
};

export default Index;