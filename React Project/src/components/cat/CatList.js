import React, {Component, Fragment} from 'react';
import requester from '../../utility/requester';
import {Redirect, Link} from 'react-router-dom';
import '../../styles/catList.css';

export default class CatList extends Component{
    constructor(props){
        super(props);
        this.state = {
            cats: []
        }
    }

    componentDidMount = () => {
        requester.get('appdata', 'cats', 'kinvey')
            .then(cats => {
                let allCats = cats.map(cat => <Link key={cat._id} to={'/cat/details/' + cat._id}><img src={cat.picture} alt='cat' /></Link>);
                this.setState({cats: allCats})
            });
    };

    render() {
        return (
            <Fragment>
                <section>
                    {!sessionStorage.getItem('username') ? <Redirect to='/user/login' /> : null}
                    <div className="list">
                        {this.state.cats.length > 0 ? this.state.cats : 'No cats in this category'}
                    </div>
                    <Link to='/cat/register'>Register Cat for GIFT</Link>
                </section>
            </Fragment>
        );
    }
}