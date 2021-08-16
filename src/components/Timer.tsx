import { useEffect, useState, VFC } from "react";
import { useTimer } from "react-timer-hook";

type props = {
  isPlaying: boolean;
  setIsplaying: Function;
};
export const Timer: VFC<props> = (props) => {
  const { isPlaying, setIsplaying } = props;
  const { seconds, restart, pause } = useTimer({ expiryTimestamp: 60 });
  if (seconds === 55) {
    setIsplaying(false);
  }

  const gameStart = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 300);
    restart((time as unknown) as number);
    setIsplaying(true);
  };
  return (
    <>
      <p>{seconds}</p>
      {isPlaying || <button onClick={gameStart}>start</button>}
    </>
  );
};
