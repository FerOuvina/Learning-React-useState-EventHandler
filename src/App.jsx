import './App.css';
import Duck from './img/duck.gif';
import Button from './components/Btn';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
  const [clicks, setNumClicks] = useState(0);
  const handleClick = () => {
    setNumClicks(clicks + 1);
  };
  const restartCounter = (e) => {
    setNumClicks(0);
  };
  return (
    <div className="App">

      <div className="duckGif__container">
        <img src={Duck} alt="duck-gif" className='duckGif__container--gif' />
      </div>

      <div className="counter__container">
        <Counter clicks={clicks} />
        <Button 
          text='Click'
          isClicButton={true}
          handleClick={handleClick} />

        <Button
          text='Restart'
          isClicButton={false}
          handleClick={restartCounter} />  
      </div>

    </div>
  );
}

export default App;
