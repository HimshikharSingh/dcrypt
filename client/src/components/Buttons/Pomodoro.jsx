import {useState} from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';


const Pomodoro = () => {

  const [key, setKey] = useState(0);

  function onComplete() {
    setKey((prevKey) => prevKey + 1);
  }

  const renderTime = ({ remainingTime }) => {
    return (
      <div className='text-xs dark:text-white text-[#OCOFC8]'>
        {remainingTime}
      </div>
    )
  }

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying
      duration={60}
      size={35}
      strokeWidth={3}
      colors={['#3dc6c1']}
      rotation="clockwise"
      colorsTime={[60]}
      onComplete={onComplete}
    >
      {renderTime}
    </CountdownCircleTimer>
  );
};
    
  

export default Pomodoro