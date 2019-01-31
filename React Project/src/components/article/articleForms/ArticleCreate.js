import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import withCustomForm from '../../HOC/CustomForm';
import articleModel from '../ArticleModel';
import formSender from '../../../utility/formSender';

const ArticleCreate = (props) => (
		<div className='wrapper'>
			{!sessionStorage.getItem('username') ? <Redirect to='/user/login' /> : null}
		<form onSubmit={props.formHandler}>
			<select name='type' onChange={props.onChangeHandler}>
				<option value='lostAndFound'>Lost and Found</option>
				<option value='health'>Health Questions</option>
			</select>
			<textarea name="content" onChange={props.onChangeHandler}></textarea>
			<input type='submit' value='Create article' />
		</form>
		<h3>OR</h3>
		<Link to='/cat/register'>Register Cat for GIFT</Link>
		</div>
	);
export default withCustomForm(ArticleCreate, articleModel, formSender.article)