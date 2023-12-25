import React from "react";
import {useState,useEffect} from 'react';
const StopWatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [timer, setTimer] = useState(0);
    const [split,setSplit]=useState([])
  
    useEffect(() => {
      let intervalId;
      if (isRunning) {
        intervalId = setInterval(() => {
          setTimer(prevTimer => prevTimer + 10);
        }, 10);
      }
      return () => {
        clearInterval(intervalId);
      };
    }, [isRunning]);
  
    const start = () => {
      setIsRunning(true);
    };
  
    const pause = () => {
      setIsRunning(false);
    };
  
    const stop = () => {
      setIsRunning(false);
      setTimer(0);
    };
  
    const cast = () => {
      setSplit([...split,formatTime(timer)]);
      console.log(split)
    };
  
    const formatTime = timeInMilliseconds => {
      const hours = String(Math.floor(timeInMilliseconds / 3600000)).padStart(2, '0');
const minutes = String(Math.floor((timeInMilliseconds % 3600000) / 60000)).padStart(2, '0');
const seconds = String(Math.floor((timeInMilliseconds % 60000) / 1000)).padStart(2, '0');
const milliseconds = String(timeInMilliseconds % 1000).padStart(3, '0');

  
      return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    };
  
    return (
      <div className="border">
        <h2>Stop Watch</h2>
        <div className="">
          <div className="">{formatTime(timer)}</div>
          <div className="">
            {isRunning?<button className="" onClick={pause}>
              Pause
            </button>:<button className="" onClick={start}>
              Start
            </button>}
            
            
            <button className="" onClick={stop}>
              Reset
            </button>
            <button className="" onClick={cast}>
              Cast
            </button>
          </div>
          <div>
            
          </div>
        </div>
        <div className="">
        <p>Cast</p>
            {split.map((data,index)=>{
                return(
                    <ul key={index}>
                    <span>Player {index+1}: </span>
                    <span>{data}</span>
                    </ul>
                    
                )
            })}  
        </div>
        
      </div>
    );
  };
  export default StopWatch;