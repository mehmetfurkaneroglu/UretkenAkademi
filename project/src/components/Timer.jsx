import { useEffect, useState } from "react";

export default function Timer({ setTimeOut, questionNumber }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if(questionNumber < 12){
      if (timer === 0) return setTimeOut(true);
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    
    
  }, [timer, setTimeOut]);

  useEffect(() => {
    if(questionNumber < 12)
      setTimer(30);
    
  }, [questionNumber]);
  return timer;
}
