import React from "react";
import styles from "./RollDice.module.css";



function RollDice({showRules, resetScore, randomImage, changeDice, showResult, message}){

    

    return <div className={styles.roll_dice}>
                <div className={styles.dice_img}>
                    
                    
                    <img src={`../../../public/images/dice_${randomImage}.png`} onClick={changeDice} alt="dice" />
                    <p>Click on Dice to roll</p>
                </div>

                <div className={styles.dice_buttons}>
                    <button className={styles.button1} onClick={resetScore}>Reset Score</button>
                    <button className={styles.button2} onClick={showRules}>Show Rules</button>
                    <p className={styles.message} 
                     style={ message === "You Win 🎉" ? {color: 'green'} : {color : 'red'}}
                    >{message}</p>
                    
                </div>

            </div>
}

export default RollDice;