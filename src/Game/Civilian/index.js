import React, { useState } from 'react';

import numeral from 'numeral';
import FlipNumbers from 'react-flip-numbers';

const Civilian = props => {
  const { civilian } = props;
  return (
    <div className="civilian__wrapper">
      Civilian - <FlipNumbers className="gurkan" height={ 20 } width={ 20 } color="" background="" play perspective={ 100 } numbers={ numeral(civilian).format('(0 a)') } />
    </div>
  );
};

export default Civilian;
