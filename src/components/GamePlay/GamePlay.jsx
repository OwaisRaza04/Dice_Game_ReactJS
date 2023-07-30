import React from "react";
import styles from "./GamePlay.module.css";
import Score from "../Score/Score";
import NumberSelector from "../NumberSelector/NumberSelector";
import RollDice from "../RollDice/RollDice";
import Rules from "../Rules/Rules";


function GamePlay(){

    const [isShowRules, setShowRules] = React.useState(false);

    const [error, setError] = React.useState("");
    
    const [Rscore, setRscore] = React.useState(0);

    const [defaultDice, changeDice] = React.useState(1);

    const [selectedNumber, setSelectedNumber] = React.useState();

    const [message, setMessage] = React.useState("");

    function showRulesHandle(){
        setShowRules((prev) => !prev);
        
    }

    function handleResetScore(){
        setRscore('0');
        
    }

    

    function handleDiceChnage(){
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        
        if (!selectedNumber) {
            setError("You have not selected any number");
            alert(error);
            return;
          }

        if (selectedNumber === randomNumber) {
            changeDice(randomNumber);
            setRscore((prev) => prev + randomNumber);
            setMessage("You Win 🎉");
            
          } else {
            changeDice(randomNumber);
            setRscore((prev) => prev - 2 < 0 ? 0 : prev - 2);
            setMessage("You loss 🥹");
          }
        
    }

    function handleResult(){
        //   (randomNumber === )
    }
   
    return <div>

            <div className={styles.flex}>
                <Score score={Rscore}/>
               
                <NumberSelector  selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>  
            </div>
            
            <div className={styles.flex_2}>
                <RollDice message={message} showRules={showRulesHandle} resetScore={handleResetScore} randomImage={defaultDice} changeDice={handleDiceChnage}/>
            </div>
                {isShowRules && <Rules />} 
            
            
        </div>

}

export default GamePlay;