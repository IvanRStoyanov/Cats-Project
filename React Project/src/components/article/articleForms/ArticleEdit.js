import React from 'react';
import withCustomForm from "../../HOC/CustomForm";
import articleModel from "../ArticleModel";
import formSender from "../../../utility/formSender";

const ArticleEdit = (props) => {
    console.log(props);
   return(
       <div className='wrapper'>
        <form onSubmit={props.formHandler}>
            <h2> Type new article content</h2>
            <select name='type' onChange={props.onChangeHandler}>
                <option value='lostAndFound'>Lost and Found</option>
                <option value='health'>Health Questions</option>
            </select>
            <textarea name="content" onChange={props.onChangeHandler}></textarea>
            <input type='submit' value='Edit article'/>
        </form>
    </div>
   );
};
export default withCustomForm(ArticleEdit, articleModel, formSender.articleEdit)