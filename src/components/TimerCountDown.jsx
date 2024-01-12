import React, { useEffect, useState } from 'react'

const TimerCountDown = () => {
    const [isRunning,setIsRunning]=useState(false) 
    const [inputTime,setInputTime]=useState(null)
    const [recordList,setRecordList]=useState([])
  
    useEffect(() => {
        let intervalId;
        
        if (isRunning) {
          intervalId = setInterval(() => {
            setInputTime(prevTime => prevTime - 1);
          }, 1000);
        }
      return () => clearInterval(intervalId);
    }, [isRunning]);
  
    const formatTime = (seconds) => {
      const days = Math.floor(seconds / (3600*24));
      const hours =Math.floor(seconds / 3600)
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;
      return `${remainingSeconds < 10 ? '0' : ''}${days}:${remainingSeconds < 10 ? '0' : ''}${hours}:${remainingSeconds < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const handleStop =()=>{
      setIsRunning(!isRunning)
    }

    const handleRecord =()=>{
      setRecordList((pre)=>[...pre,formatTime(inputTime)])
    }  


    return (
      <div className="min-h-screen flex items-center justify-center ">
        <div>
          <input type="text" onChange={((e)=>setInputTime(e.target.value))}  className='border p-1'/>
         
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Countdown Timer</h1>
          <div className="text-2xl font-bold mb-4">{formatTime(inputTime)}</div>
          <p className="text-gray-500">Refresh the page to restart the timer.</p>
          <button className='bg-red-500 p-1 rounded-sm text-xl text-white font-bold' onClick={handleStop} >{isRunning ? "Stop": "Resume"}</button>
        </div>

        <div>
          <button onClick={handleRecord} className='p-1 bg-blue-500 text-white'>Record</button>

          {
            recordList.length > 0 && (
             <ul className='border'>
              {recordList.map((val,i)=>{
                return (<li key={i}>{val}</li>)
              })}
             </ul>


            )
          }
        </div>
      </div>
    );
}

export default TimerCountDown






