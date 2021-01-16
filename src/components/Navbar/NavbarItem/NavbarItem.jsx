import React from 'react';
import styles from './../Navbar.module.css';
import {NavLink} from "react-router-dom";

const NavbarItem = (props) => {
    return (
        <div className={`${styles.item}`}>
            <NavLink to={props.url} activeClassName={styles.active}>{props.name}</NavLink>
        </div>
    )
}

export default NavbarItem;