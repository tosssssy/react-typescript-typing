import { useState } from "react";
import { MainContainer } from "./components/MainContainer";
import { Timer } from "./components/Timer";
export const App = () => {
  const [isPlaying, setIsplaying] = useState<boolean>(false);

  return (
    <>
      <Timer isPlaying={isPlaying} setIsplaying={setIsplaying} />
      {isPlaying ? <MainContainer difficulty={2} /> : <div>result</div>}
    </>
  );
};
