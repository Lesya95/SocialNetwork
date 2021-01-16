import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/ava.jpg'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let p = 1; p <= pagesCount; p++) {
        pages.push(p);
    }
    return (
        <div>
            <h2>Users</h2>
            <div className={styles.block}>
                {pages.map(p => {
                    return (
                        <span className={props.currentPage === p
                            ? styles.activePageNumber
                            : styles.pageNumber}
                              onClick={(e) => {
                                  props.onPageChanged(p)
                              }}
                        >{p}</span>
                    )
                })}
            </div>
            {
                props.users.map(user => {
                    return (
                        <div className={styles.container}>
                            <div className={styles.imgItem}>
                                <NavLink to={'/profile/' + user.id}>
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
                                    ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                        props.toggleIsFollowingProgress(true, user.id);
                                        usersAPI.unfollow(user.id).then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(user.id)
                                            }
                                            props.toggleIsFollowingProgress(false, user.id);
                                        })
                                    }} >unfollowed</button>
                                    : <button disabled={props.followingInProgress.some(id => id === user.id)}  onClick={() => {
                                        props.toggleIsFollowingProgress(true, user.id);
                                        usersAPI.follow(user.id).then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(user.id)
                                            }
                                            props.toggleIsFollowingProgress(false, user.id);
                                        })
                                    }}>followed</button>}
                            </div>
                        </div>
                    )
                })
            }
            <button onClick={props.getUsers}>Get users</button>
        </div>
    )
}

export default Users;