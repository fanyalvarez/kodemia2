import React, { useState } from 'react';

function ejercico2() {
  const [clickCount, setClickCount] = useState(0);
  const [buttons, setButtons] = useState([]);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
    if ((clickCount + 1) % 3 === 0) {
      setButtons(prevButtons => [...prevButtons, <button key={clickCount + 1}>x</button>]);
      console.log(clickCount)
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click me {clickCount}</button>
      {buttons.map(button => button)}
    </div>
  );
}

export default ejercico2;