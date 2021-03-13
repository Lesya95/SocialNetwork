import React from 'react';
import styles from './Navbar.module.css';
import NavbarItem from "./NavbarItem/NavbarItem";



const Navbar = (props) => {

    let linkElements = props.navbarItem
        .map(link => <NavbarItem name={link.name} url={link.url}  key={link.id}/>);

    return (
        <aside className={props.burgerEditMode ? styles.aside + " " + styles.active : styles.aside} >
            <nav>
                {linkElements}
            </nav>
        </aside>
    )
};

export default Navbar;

