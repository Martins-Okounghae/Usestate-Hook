import React, { useState } from "react";

function App() {


  const now = new Date().toLocaleTimeString();
  const [time,setTime ] = useState(now)

  function updateTime(){
    const newTime = new Date.toLocaleTimeString();
    setTime(newTime)
  }



  function realTimeUpdate() {
    const realTime = new Date().toLocaleTimeString();
       setTime(realTime)
      
   }


  setInterval(realTimeUpdate, 1000);
 


  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
