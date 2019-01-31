import React from 'react';
import {Link} from 'react-router-dom';


const Article = (props) => {
    let shortContent = '';
    if(props.short){
    let shortView = props.content.split(' ');
    let shortArr = [];
        for (let i = 0; i < 70; i++) {
            shortArr.push(shortView[i]);
        }
    shortContent = shortArr.join(' ') + '...';
    }else shortContent = props.content;

    return (
        <article className='list-article'>
            <Link to={'/user/profile/' + props._acl.creator}>
                {props.author}
                <img src={props.authorPic} alt='cat'/>
            </Link>
            <Link to={'/article/details/' + props.type + '/' + props._id} >
                <div className='content'>
                    {shortContent}
                </div>
            </Link>
        </article>)
};

export default Article;