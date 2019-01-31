import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import requester from "../../utility/requester";
import Article from "../article/articleViews/Article";
import '../../styles/homeBody.css';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            lostAndFound: [],
            health: [],
            gifts: []
        }
    }

    componentDidMount = () => {
        if(sessionStorage.getItem('username')) {
            requester.get('appdata', 'articles?query={}&sort={"_kmd.ect":-1}', 'kinvey')
                .then(articles => {
                   let lostAndFound = articles.filter(a => a.type === 'lostAndFound').slice(0, 3);
                   let health = articles.filter(a => a.type === 'health').slice(0, 3);
                   console.log(lostAndFound);
                   console.log(health);
                   this.setState({lostAndFound, health});
                   requester.get('appdata', 'cats?query={}&sort={"_kmd.ect":-1}', 'kinvey')
                       .then(cats => {
                           this.setState({gifts: cats.slice(0, 3)});
                       })
                });
        }
    };

render() {
    return (
        <Fragment>
            {sessionStorage.getItem('username')
                ? (
                    <div className="wrapper">
                        <div className="home-article">
                            {this.state.lostAndFound.map(a => <Article {...a} key={a._id} short={true} />)}
                        </div>
                        <div className="home-article">
                            {this.state.health.map(a => <Article {...a} key={a._id} short={true} />)}
                        </div>
                        <div className="home-article">
                            {this.state.gifts.map(cat => <Link key={cat._id} to={'/cat/details/' + cat._id}><img src={cat.picture} alt='cat' /></Link>)}
                        </div>
                    </div>
                )
                : null
            }
            <Link to='/article/create'><input type="button" value="Create new article"/></Link>
        </Fragment>
    )
    }
};
