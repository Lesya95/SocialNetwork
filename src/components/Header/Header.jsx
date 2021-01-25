import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import ava from '../../assets/images/ava.jpg'

const  Header = (props) => {

    let imgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuNS5l7bsdEk4KjZraSappFCeER0XoU44OCw&usqp=CAU';
    return (
        <header className={styles.header}>
            <img src={imgSrc} alt="img"/>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div className={styles.block}>
                        <img className={styles.ava} src={ava}/>
                        <span>{props.login}</span>
                        <button className={styles.logout} onClick={props.logout}>Log out</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
};

export default Header;