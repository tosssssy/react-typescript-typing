import { MainContainer } from "./components/MainContainer";
export const App = () => {
  const isPlaying: boolean = true;

  return (
    <>
      <div>time</div>
      {isPlaying ? <MainContainer difficulty={2} /> : <div>result</div>}
    </>
  );
};
