import React from "react";
import preloader from "../../../assets/images/preloader.svg";
import styles from "./Preloader.module.css"

let Preloader = (props) => {
    return (
        <div className={styles.preloader}>
            <div className={styles.preloaderContainer}><img src={preloader} alt="img"/></div>

        </div>
    )
}

export default Preloader;