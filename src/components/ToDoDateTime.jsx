import { useState,useEffect} from "react";

export const ToDoDateTime = () => {
  const [timeDate, setTimeDate] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setTimeDate(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <h2 className="date-time">{timeDate}</h2>;
};
