import React from 'react';
import {Redirect} from 'react-router-dom';
import requester from "../../../utility/requester";
import isInRole from '../../../utility/isInRole'

const CatDelete =(props) => {
    if(isInRole('admin'))
        requester.remove('appdata', 'cats/?query={"_id":"' + props.match.params.id + '"}', 'kinvey');

    return <Redirect to={'/cat/list'} />
};
export default CatDelete;