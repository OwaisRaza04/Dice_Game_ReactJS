import React from "react";
import styles from "./Rules.module.css";


function Rules(){
    return <div className={styles.rule_container}>

                <h1 >How to play dice game</h1>

                <div className={styles.instructions}>
                    <p>Select any number</p>
                    <p>Click on dice image</p>
                    <p>after click on dice if selected number is equal to dice number you will get same point as dice</p>
                    <p>if you get wrong guess then 2 point will be dedcuted</p>
                </div>

          </div>         
    
}

export default Rules;

