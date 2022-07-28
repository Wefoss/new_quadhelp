import React from "react";
import styles from "./EventContestItem.module.css";
import { useEffect, useRef, useState } from "react";


const EventContestItem = ({ start, end, title, removeItem, id }) => {
  const [isDone, setIsDone] = useState(false);
  const [timer, setTimer] = useState('')
  const currentItem = useRef();
  const hours = Math.floor(timer / (1000 * 60 * 60))
  const minutes = Math.floor((timer / 1000 / 60) % 60)
  const seconds = Math.floor((timer / 1000 ) % 60)

  useEffect(() => {
    setIsDone(false);
      let intervel = setInterval(() => {
      let max = end - start;
      let currentTime = new Date().getTime();
      let ellasped = currentTime - start;
      let prec = (ellasped / max) * 100;
      if (ellasped >= max) {
        ellasped = max;
        setIsDone(true);
        clearInterval(intervel);
      }
      setTimer(end - new Date().getTime())
      currentItem.current.style.width =  prec.toFixed(2) + "%" ;
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
        <p>{title}</p><p>{hours > 0 && hours+'h'} {minutes > 0 && minutes + 'm'} {seconds}s</p>
        {isDone && <button onClick={() => removeItem(id)}>X</button>}
      </div>
    </div>
  );
};

export default EventContestItem;
