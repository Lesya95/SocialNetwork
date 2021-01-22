import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userAva from '../../../assets/images/ava.jpg';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    if(!props.profileInfo){
        return <Preloader />
    } else {
        return (
            <div>
                <div className={styles.image}>
                    <img src="https://i.playground.ru/p/4T0RQBh-SE3XRAZN7gtGww.png" alt="img" />
                </div>
                <div className={styles.user}>
                    <div className={styles.userImg}>
                        <img src={props.profileInfo.photos.large !=  null
                            ? props.profileInfo.photos.large
                            : userAva} alt="userImg" />
                    </div>
                    <div className={styles.userInfo}>
                        <div className="user__name"><h1>{props.profileInfo.fullName}</h1></div>
                        <ProfileStatus
                            status={props.status}
                            updateUserStatus={props.updateUserStatus}
                        />
                        <div className="user__birthday">Date of Birth:  8 april</div>
                        <div className="user__city">City: Minsk</div>
                        {props.profileInfo.contacts.facebook
                            ? <div>Facebook: {props.profileInfo.contacts.facebook}</div>
                            : <div></div>
                        }
                        {props.profileInfo.contacts.vk
                            ? <div>Vk: {props.profileInfo.contacts.vk}</div>
                            : <div></div>
                        }
                        {props.profileInfo.contacts.twitter
                            ? <div>Twitter: {props.profileInfo.contacts.twitter}</div>
                            : <div></div>
                        }
                        {props.profileInfo.contacts.instagram
                            ? <div>Instagram: {props.profileInfo.contacts.instagram}</div>
                            : <div></div>
                        }
                        {props.profileInfo.contacts.youtube
                            ? <div>Youtube: {props.profileInfo.contacts.youtube}</div>
                            : <div></div>
                        }
                        {props.profileInfo.contacts.github
                            ? <div>Github: {props.profileInfo.contacts.github}</div>
                            : <div></div>
                        }
                        {props.profileInfo.contacts.mainLink
                            ? <div>MainLink: {props.profileInfo.contacts.mainLink}</div>
                            : <div></div>
                        }
                        {props.profileInfo.contacts.website
                            ? <div className="user__site">{props.profileInfo.contacts.website}</div>
                            :  <div></div>
                        }
                        {props.profileInfo.aboutMe
                            ? <div>About Me: {props.profileInfo.aboutMe} </div>
                            : <div></div>
                        }


                    </div>
                </div>
            </div>
        )
    }

};

export default ProfileInfo;
