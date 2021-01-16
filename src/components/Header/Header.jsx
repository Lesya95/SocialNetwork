import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import ava from '../../assets/images/ava.jpg'

const  Header = (props) => {
    return (
        <header className={styles.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuNS5l7bsdEk4KjZraSappFCeER0XoU44OCw&usqp=CAU' alt="img"/>
            <div className={styles.loginBlock}>
                {props.isAuth ? <div> <img  className={styles.ava} src={ava}/> <span>{props.login}</span>  </div>: <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
};

export default Header;