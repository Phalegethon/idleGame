import React, { useEffect, useState } from 'react';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import AnimatedNumbers from '../Components/AnimatedNumbers/index';

import { format } from 'd3-format';

import './game.css';

const Game = props => {
  const { civilian, setCivilian, name } = props;

  const [section, setSection] = useState(1);
  const [sectionOutput, setSectionOutput] = useState(1);
  const [sectionMultiplier, setSectionMultiplier] = useState(1.11);

  useEffect(() => {
    const interval = setInterval(() => {
      setSectionOutput((section + sectionOutput) * sectionMultiplier);
    }, 200);
    return () => clearInterval(interval);
  }, [sectionOutput, sectionMultiplier]);

  const spendCivilian = () => {
    setCivilian(0);
    setSection(section + civilian);
  };

  const formatCivilianToSectors = number => {

    if (number < 1000) {
      return numeral(number).format('(0 a)');
    }
    return numeral(number).format('(0.00 a)');
  };

  const formatCivilianToSectors2 = number => {
    return format('~s')(number);
  };

  return (
    <div className="game__wrapper">
      <div className="sectors__wrapper">
        <div className="sectors__output">
          <span>{ name } Output </span>

          <div>
            numeral :
            <AnimatedNumbers numbers={ formatCivilianToSectors(sectionOutput) }/>
          </div>
          <div>
            d3 :
            <AnimatedNumbers numbers={ formatCivilianToSectors2(sectionOutput) }/>
          </div>
        </div>
        <button
          className="sectors__button"
          id="soldier1"
          onClick={ spendCivilian }>
          <small>Buy</small>
          <span>{ formatCivilianToSectors(civilian) }</span>
          <small>civilian to { name }</small>
        </button>
      </div>
    </div>
  );
};

Game.propTypes = {
  civilian: PropTypes.number,
  setCivilian: PropTypes.func,
  name: PropTypes.string,
};

export default Game;
