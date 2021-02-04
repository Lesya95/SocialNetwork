import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/ava.jpg'
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, follow, unfollow}) => {
    return <div className={styles.container}>
                            <div className={styles.imgItem}>
                                <NavLink to={'/profile/' + user.id} >
                                    <img className={styles.imgUsers} src={user.photos.small != null
                                        ? user.photos.small
                                        : userPhoto} alt="img"/>
                                </NavLink>
                            </div>
                            <div className={styles.infoItem}>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </div>
                            <div className={styles.locationItem}>
                                <div>{'user.location.country'}</div>
                                <div>{'user.location.city'}</div>
                            </div>
                            <div className={styles.buttonItem}>
                                {user.followed
                                    ? <button className={styles.userButton}
                                        disabled={followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                           unfollow(user.id)
                                        }}>unfollowed</button>
                                    : <button className={styles.userButton}
                                        disabled={followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            follow(user.id)
                                        }}>followed</button>}
                            </div>
                        </div>
}

export default User;