import React from "react";
import Styles from "./Score.module.css";


function Score({score}){
    return <div className={Styles.score}>
               <h1>{score}</h1>
               {/* <h1>5</h1> */}
               <p>Total Score</p>
           </div>
}

export  default Score;