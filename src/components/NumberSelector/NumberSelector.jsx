import React from "react";
import styles from "./NumberSelector.module.css";



function NumberSelector({
  // setError,
  // error,
  selectedNumber,
  setSelectedNumber,
}){
    
    const arrNumber = [1, 2, 3, 4, 5, 6];
    const [isNumSelected , setNumSelected] = React.useState();

    const numberSelectorHandler = (value) => {
      setSelectedNumber(value);
      setError("");
    };
    // console.log(isNumSelected);
    return (
        <div className={styles.number_selector}>
          
          <div className={styles.number_boxes}>
            {arrNumber.map((value, i) => (
              <button
              isSelected={value === selectedNumber}
              key={i}
              onClick={() => numberSelectorHandler(value)}
               
               style={ value === selectedNumber ? {backgroundColor: 'black', color: 'white'} : {backgroundColor : 'white', color:'black'}}
               
                > 
               {value}
               </button>
            ))}
          </div>

          <p>Select Number</p>

        </div>

        
      );
};



export default NumberSelector;