import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import imgLogo from '../../assets/images/images.png'

const  Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img src={imgLogo} alt="img"/>
                <div className={styles.loginBlock}>
                    {props.isAuth
                        ? <div className={styles.block}>
                            {props.imgSrc ? <img className={styles.ava} src={props.imgSrc}/> : null}
                            <span>{props.login}</span>
                            <button className={styles.logout} onClick={props.logout}>Log out</button>
                        </div>
                        : <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
            </div>
        </header>
    )
};

export default Header;