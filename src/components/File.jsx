import React, { useState } from "react";
import styles from "./file.module.css";
export default function file() {
    const [value,setValue]=useState([]);
    const [CSV,setCSV]=useState([]);
    const handleClick=(e)=>{
        setValue(eval(e.target.value))
    }
    const convert=()=>{
      for(let i=0;i<value.length;i++){
        if(i==0){
          setCSV((csv)=>csv+Object.keys(value[i]).toString()+'\n');
        }
          setCSV((csv)=>csv+Object.values(value[i]).toString()+'\n');
      }
    }
  return (
    <>
      <div className={`${styles.flex} ${styles.col} ${styles.gap} ${styles.container}`}>
        <h1>JSON to CSV convertor</h1>
        <div className={`${styles.flex} ${styles.gap}`}>
          <div className={`${styles.flex} ${styles.col} ${styles.gap}`}>
            <textarea id="json" className={styles.input} onChange={handleClick}/>
            <button onClick={convert}>Convert</button>
          </div>
          <div className={`${styles.flex} ${styles.col} ${styles.gap}`}>
            <textarea type="text" id="csv" className={styles.output} value={CSV}/>
            <h3>Output CSV</h3>
          </div>
        </div>
      </div>
    </>
  );
}
