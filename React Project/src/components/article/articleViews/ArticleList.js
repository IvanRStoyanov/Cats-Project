import React, {Component, Fragment} from 'react';
import requester from '../../../utility/requester';
import Article from './Article';
import '../../../styles/articleLists.css'
import {Redirect, Link} from 'react-router-dom';

export default class ArticleList extends Component{
    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount = () => {
        const articleType = this.props.match.params.type;
        requester.get('appdata', 'articles?query={"type":"' + articleType +'"}&sort={"_kmd.ect":-1}', 'kinvey')
            .then(articles => {
                let allArticles = articles.map(a => <Article {...a} key={a._id} short={true} />);
                this.setState({articles: allArticles})
            });
    };

    render() {
        return (
            <Fragment>
                <section>
                    {!sessionStorage.getItem('username') ? <Redirect to='/user/login' /> : null}
                    <div className="list">
                        {this.state.articles.length > 0 ? this.state.articles : 'No articles in this category'}
                    </div>
                    <Link to='/article/create'><input type="button" value="Create new article" /></Link>
                </section>
            </Fragment>
        );
    }
}