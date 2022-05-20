import useTimer from './timer-utils';

const Timer = (props) => {
  const {timer,setTrigger} = props
  const endTime = new Date().getTime() + 60000 * timer; // tempo depende da dificuldade escolhida
  const [timeLeft, setEndTime] = useTimer(endTime);

  const minutes = Math.floor(timeLeft / 60000) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;
 
  if(timeLeft == 0){
    setTrigger(true);
  }

  return (
    <div>
      <p>{`${minutes}:${seconds}`}</p>
    </div>
  );
}

export default Timer;