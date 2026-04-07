import React, { useEffect, useRef, useState } from "react";
import styles from "./controlPanel.css";

export default function Module({ name, value, update }) {
    const renders = useRef(0);
    renders.current++;

    const [flash, setFlash] = useState(false);

    useEffect(() => {
        setFlash(true);
        const timer = setTimeout(() => setFlash(false), 300);
        return () => clearTimeout(timer);
    }, [value]);

    return (
        <div className={`${styles.card} ${flash ? styles.flash : ""}`}>
            <h3 className={styles.title}>Module: {name}</h3>

            <p className={styles.status}>Status: {value}%</p>
            <p className={styles.render}>Render: {renders.current}</p>

            <div className={styles.buttons}>
                <button className={`${styles.btn} ${styles.plus}`} onClick={() => update(name, +10)}>+10%</button>
                <button className={`${styles.btn} ${styles.minus}`} onClick={() => update(name, -10)}>-10%</button>
            </div>
        </div>
    );
}
