import React from "react";
import {reduxForm} from "redux-form";
import {fieldCreator, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from './../common/FormsControls/FormsControls.module.css'


const Login = (props) => {
    if (props.isAuth){
        return <Redirect to={'/profile'} />
    }

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const LoginForm = ({handleSubmit, error}) => {
    return (
            <form onSubmit={handleSubmit}>
                {fieldCreator( Input,'email', [required], 'Email',)}
                {fieldCreator( Input,'password', [required], 'Password', 'password')}
                {fieldCreator( Input,'rememberMe', [], null, 'checkbox', 'remember me')}
                {error && <div className={styles.totalError}>{error}</div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login})(Login);