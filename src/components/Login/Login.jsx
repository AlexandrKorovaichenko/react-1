import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/Formcontrol/FormControl';
import { requairedField  } from '../../validatorForms/validator';
import { connect } from 'react-redux';
import { logInThunkCreator } from "../../redux/auth-reducer";
import { Navigate } from 'react-router-dom';
import classFormControl from '../common/Formcontrol/FormControl.module.css';

const Login = (props) => {
    
    const onSubmit = (formData) => {
        console.log(formData);
        props.logInThunkCreator(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return <div>
        <h1> Login </h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>

}


const LoginForm = (props) => {
    
    
    return (

            <form onSubmit={props.handleSubmit}>

                <div>
                    <Field placeholder={"email"} name={"email"}         
                    validate={[requairedField]}
                    component={Input}/>
                </div>

                <div>
                    <Field placeholder={"Password"} name={"password"}   
                    validate={[requairedField]} 
                    type={"password"} 
                    component={Input} />
                </div>

                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input}/>
                </div>

                {
                    props.error 
                        && 
                    <div className={classFormControl.formSummsryError}>
                        ERROR
                    </div>
                }

                <div>
                    <button>Login</button>
                </div>

            </form>
        )
}


const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)


let mapStateToProps = (store) => {
    return {
        isAuth: store.auth.isAuth
    }
}

export default connect( mapStateToProps, { logInThunkCreator } )(Login);