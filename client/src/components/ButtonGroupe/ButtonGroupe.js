import React from "react";
import styles from "./ButtonGroupe.module.css";

const ButtonGroupe = () => {
  const activePanel = (e) => {
    e.currentTarget.parentNode.childNodes.forEach((el) => {
      el.classList.add(styles.disable);
      el.classList.remove(styles.active);
      if (e.currentTarget === el) {
        el.classList.add(styles.active);
        el.classList.remove(styles.disable);
      }
    });
  };

  return (
    <section className={styles.btn_groupe}>
      <div className={styles.wrapper}>
        <article onClick={(e) => activePanel(e)} className={styles.btn}>
          <div>
            <span>no</span>
          </div>
          <p>The Domain should exactly match the name</p>
        </article>
        <article onClick={(e) => activePanel(e)} className={styles.btn}>
          <div>
            <span>yes</span>
          </div>
          <p>But minor variations are allowed (Recommended)</p>
        </article>
        <article onClick={(e) => activePanel(e)} className={styles.btn}>
          <div>
            <span>no</span>
          </div>

          <p>I am only looking for a name, not a Domain</p>
        </article>
      </div>
    </section>
  );
};

export default ButtonGroupe;
