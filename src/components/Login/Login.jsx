import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
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

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Input} name={'email'}
                           placeholder={'Email'} validate={[required]}
                    />
                </div>
                <div>
                    <Field component={Input}
                           validate={[required]}
                           type={'password'}
                           name={'password'}
                           placeholder={'Password'}
                    />
                </div>
                <div>
                    <Field component={Input}
                           validate={[required]}
                           name={'rememberMe'}
                           type='checkbox'
                    />
                    remember me
                </div>
                {props.error && <div className={styles.totalError}>{props.error}</div>}
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