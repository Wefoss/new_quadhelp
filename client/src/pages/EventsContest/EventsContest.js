import React from "react";
import EventsForm from "../../components/EventsForm/EventsForm";
import ButtonGroupe from "../../components/ButtonGroupe/ButtonGroupe";
import styles from "./EventsContest.module.css";
import { useState, useEffect } from "react";
import EventContestItem from "../../components/EventContestItem/EventContestItem";

const EventsContest = () => {
  const [events, setEvents] = useState([]);

  const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("events"));
    if (items) {
      setEvents(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
    // localStorage.removeItem('events')
  }, [events]);

  const removeItem = (id) => {
    setEvents(events.filter((el) => el.id !== id));
  };

  const submitFormEvents = (e, formikBag) => {
    let today = new Date().getTime();
    let end = new Date(e.date).getTime();
    let hours = e.time;
    let id = uid();
    let selectedHours = new Date().setHours(
      new Date().getHours() + Number(hours)
    );
    let sub = {
      start: today,
      end: hours ? end + hours * 60 * 60 * 1000 : end,
      id,
      title: e.title,
      date: e.date,
    };

    if (new Date(e.date).getTime() < new Date().getTime()) {
      sub.end = selectedHours;
    }
    setEvents([...events, sub]);

    formikBag.resetForm();
  };

  return (
    <>
      <section className={styles.progress_bar}>
        <div className={styles.container}>
          <div className={styles.progress_bar_content}>
            <EventsForm submitFormEvents={submitFormEvents} />
            <div className={styles.progress}>
              {events.length ? (
                events.sort((a, b) => a.end - b.end).map((el, id) => (
                  <EventContestItem
                    key={id}
                    title={el.title}
                    id={el.id}
                    start={el.start}
                    end={el.end}
                    removeItem={removeItem}
                  />
                ))
              ) : (
                <h3 style={{"textAlign": 'center'}}>Add New Feature</h3>
              )}
            </div>
          </div>
        </div>
      </section>
      <ButtonGroupe />
    </>
  );
};

export default EventsContest;
