import React from "react";
import styles from "./startgame.module.css";



function StartGame({toggle}){
    return <div className={styles.container}>
         
                <img src="../../../public/images/dices.png" alt="" />

                <div className={styles.container_text}>
                    <h1>DICE GAME</h1>
                    <button onClick={toggle}>Play Now</button>
                    
                </div>

            </div>
        

}

export default StartGame;