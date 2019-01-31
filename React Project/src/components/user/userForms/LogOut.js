import React from 'react';
import {Redirect} from 'react-router-dom';
import requester from "../../../utility/requester";

const LogOut = (props) =>{
    requester.post('user', '_logout', 'kinvey')
        .then(res => {
            sessionStorage.clear();
			props.switchState();
        });
    return <Redirect to={'/'} />
};
export default LogOut;