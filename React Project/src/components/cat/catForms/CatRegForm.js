import React from 'react';
import withCustomForm from '../../HOC/CustomForm';
import CatModel from '../CatModel';
import formSender from '../../../utility/formSender'


const CatRegForm = (props) => {
    return <form onSubmit={props.formHandler}>
        <h2>Register Cat</h2>
        <label>Name:</label>
        <input name="name" type="text" onChange={props.onChangeHandler}  />
        <label>Breed:</label>
        <input name="breed" type="text" onChange={props.onChangeHandler}  />
        <label>age:</label>
        <input name="age" type="number" onChange={props.onChangeHandler}  />
        <label>Picture URL (required):</label>
        <input name="picture" type="url" onChange={props.onChangeHandler} />
        <label>Color:</label>
        <input name="color" type="text" onChange={props.onChangeHandler}  />
        <input value="Register Cat" type="submit" />
    </form>
};
export default withCustomForm(CatRegForm, CatModel, formSender.regCat);