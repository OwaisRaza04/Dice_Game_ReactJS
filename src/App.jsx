import React from "react";
import StartGame from "./components/StartGame/StartGame";
import Score from "./components/Score/Score";
import GamePlay from "./components/GamePlay/GamePlay";

function App(){


  const [isGameStarted, setGameStarted] = React.useState(false);

  function ToggleGamePlay(){
    setGameStarted((prev) => !prev);
  }


  return <div>
    {isGameStarted ? <GamePlay /> : <StartGame toggle={ToggleGamePlay}/>}
  </div>;
       
}

export default App;