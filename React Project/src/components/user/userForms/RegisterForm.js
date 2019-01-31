import React from 'react';
import withCustomForm from '../../HOC/CustomForm';
import RegModel from '../models/RegModel';
import formSender from '../../../utility/formSender'

	
const PostForm = (props) => {
   return <form onSubmit={props.formHandler}>
        <h2>Register</h2>
        <label>Username:</label>
        <input name="username" type="text" onChange={props.onChangeHandler}  />
        <label>Password:</label>
        <input name="password" type="password" onChange={props.onChangeHandler}  />
        <label>Repeat Password:</label>
        <input name="repeatPass" type="password" onChange={props.onChangeHandler}  />
        <label>Picture URL (optional):</label>
        <input name="picture" type="url" onChange={props.onChangeHandler} />
        <label>Phone number (optional):</label>
        <input name="phone" type="phone" onChange={props.onChangeHandler}  />
        <input id="btnRegister" value="Sign Up" type="submit" />
    </form>
};
export default withCustomForm(PostForm, RegModel, formSender.register);