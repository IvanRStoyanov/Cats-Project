import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/header.css';

const Navigation = () =>  (
		<div className='nav-bar'>
				<ul>
					<li><Link to='/'>HOME</Link></li>
					<li><Link to='/article/list/lostAndFound'>LOST AND FOUND</Link></li>
					<li><Link to='/article/list/health'>HEALTH</Link></li>
		            <li><Link to='/cat/list'>GIFT A CAT</Link></li>
				</ul>
				<ul style={{float: "right"}}>
					{sessionStorage.getItem('username') 
					? <Fragment> 
						<li><Link to='/user/profile/:id'>Hello, {sessionStorage.getItem('username')}</Link></li>
						<li><Link to='/logout'>LogOUT</Link></li>
					</Fragment>
					:  <li><Link to='/user/login'>Login/Register</Link></li>
					}
				</ul>
	</div>
);
export default Navigation;
