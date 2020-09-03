import React  from 'react';
import PropTypes from 'prop-types';

import numeral from 'numeral';
import AnimatedNumbers from '../../Components/AnimatedNumbers/index';

const Civilian = props => {
  const { civilian } = props;
  return (
    <div className="civilian__wrapper">
      <span>Civilian</span>
      <AnimatedNumbers  numbers={ numeral(civilian).format('(0 a)') }/>
    </div>
  );
};

Civilian.propTypes = {
  civilian: PropTypes.number
};

export default Civilian;
