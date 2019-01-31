import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import withCustomForm from '../../HOC/CustomForm';
import LoginModel from '../models/LoginModel';
import formSender from '../../../utility/formSender'

	
const LoginForm = (props) => {
   return (
	<Fragment>
		<form onSubmit={props.formHandler}>
	        <h2>Login</h2>
	        <label>Username:</label>
	        <input name="username" type="text" onChange={props.onChangeHandler}  />
	        <label>Password:</label>
	        <input name="password" type="password" onChange={props.onChangeHandler}  />
	        <input id="btnRegister" value="Sign Up" type="submit" />
	    </form>
		<Link to='/user/register'>Sign UP</Link>	
	</Fragment>)
};
export default withCustomForm(LoginForm, LoginModel, formSender.login);