import React, { useEffect, useState } from 'react'

const TimerCountDown = () => {
    const [timeLeft, setTimeLeft] = useState(4600);
    const [isRunning,setIsRunning]=useState(true) 
  
    useEffect(() => {
        let intervalId;

        if (isRunning) {
          intervalId = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
          }, 1000);
        }
  
      return () => clearInterval(intervalId);
    }, [isRunning]);
  
    const formatTime = (seconds) => {
        const hours =Math.floor(seconds / 3600)
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;
      return `${hours}:${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const handleStop =()=>{
        // alert("sdg")
       setIsRunning(!isRunning)

    }

  

    return (
      <div className="min-h-screen flex items-center justify-center ">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Countdown Timer</h1>
          <div className="text-2xl font-bold mb-4">{formatTime(timeLeft)}</div>
          <p className="text-gray-500">Refresh the page to restart the timer.</p>
          <button className='bg-red-500 p-1 rounded-sm text-white font-bold' onClick={handleStop} >Stop</button>
        </div>
      </div>
    );
}

export default TimerCountDown






