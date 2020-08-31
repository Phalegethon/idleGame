import React, { useEffect, useState } from 'react';
import './App.css';

import Civilian from './Game/Civilian';
import Game from './Game';

function App () {

  const [civilian, setCivilian] = useState(1);
  const [civilianMultiplier, setCivilianMultiplier] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCivilian(civilian + civilianMultiplier);
    }, 200);
    return () => clearInterval(interval);
  }, [civilian, civilianMultiplier]);


  return (
    <div className="game__container">
      <Civilian civilian={ civilian }/>
      <Game civilian={ civilian } setCivilian={ setCivilian } name="Hangar" />
      <Game civilian={ civilian } setCivilian={ setCivilian } name="Farm" />
      { /*<Game civilian={civilian} setCivilian={setCivilian} name="Barrack"/>*/ }
      { /*<Game civilian={civilian} setCivilian={setCivilian} name="headQuarter"/>*/ }

    </div>
  );
}

export default App;
