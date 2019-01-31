import React from 'react';
import {Redirect} from 'react-router-dom';
import requester from "../../../utility/requester";
import isInRole from "../../../utility/isInRole";

const ArticleDelete =(props) => {
    requester.get('appdata', 'articles/' + props.match.params.id, 'kinvey')
        .then(article => {
            if(article.author === sessionStorage.getItem('username') || isInRole('admin')) {
                requester.remove('appdata', 'articles/?query={"_id":"' + props.match.params.id + '"}', 'kinvey')
                    .then(console.log);
            }
        });
    return <Redirect to={'/article/list/' + props.match.params.type} />
};
export default ArticleDelete;