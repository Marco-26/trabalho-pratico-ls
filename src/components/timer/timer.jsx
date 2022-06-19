import useTimer from './timer-utils';

const Timer = (props) => {
  const {timer,setTrigger,setLost} = props
  const endTime = new Date().getTime() + 60000 * timer; // tempo depende da dificuldade escolhida
  const [timeLeft] = useTimer(endTime);

  const minutes = Math.floor(timeLeft / 60000) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;
 
  if(timeLeft === 0){
    setLost(true);
    setTrigger(true);
  }

  return (
      <p>{`${minutes}:${seconds}`}</p>
  );
}

export default Timer;