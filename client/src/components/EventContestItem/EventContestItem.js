import React from "react";
import styles from "./EventContestItem.module.css";
import { useEffect, useRef, useState } from "react";

const EventContestItem = ({ start, end, title, removeItem, id }) => {
  const [isDone, setIsDone] = useState(false);
  const [timer, setTimer] = useState("");
  const currentItem = useRef();
  const day = Math.floor(timer / (1000 * 60 * 60 * 24))
  const hours = Math.floor(timer / (1000 * 60 * 60));
  const minutes = Math.floor((timer / 1000 / 60) % 60);
  const seconds = Math.floor((timer / 1000) % 60);


 const digitWithZero = (num, str) => {
     return num < 10 ? '0' + num + str : num + str
 }

  useEffect(() => {
    setIsDone(false);
    const intervel = setInterval(() => {
      const max = end - start;
      const currentTime = new Date().getTime();
      let ellasped = currentTime - start;
      let prec = (ellasped / max) * 100;
      if (ellasped >= max) {
        ellasped = max;
        setIsDone(true);
        clearInterval(intervel);
      }
      setTimer(end - currentTime);
      currentItem.current.style.width = prec.toFixed(2) + "%";
    }, 1000);

    return () => {
      clearInterval(intervel);
    };
  }, [start, end]);

  return (
    <div className={styles.progress_wrapper}>
      <div
        style={{ maxWidth: isDone && 100 + "%" }}
        className={styles.progress_events}
        ref={currentItem}
      ></div>
      <div className={styles.progress_content}>
        <p>
          {title}
          {isDone && <i style={{ color: "green" }} class="fa  fa-check"></i>}
        </p>
        <p className={styles.progress_timer}>
          {day > 0 && day + 'd '} 
          {hours > 0 ? digitWithZero(hours, 'h ') : day > 0 && hours + '00h '}
          {minutes > 0 ? digitWithZero(minutes, 'm ') : hours > 0 && '00m '} 
          {seconds > 0 ? digitWithZero(seconds, 's') : minutes > 0 && '00s'}
        </p>
        {isDone && <button onClick={() => removeItem(id)}>X</button>}
      </div>
    </div>
  );
};

export default EventContestItem;
