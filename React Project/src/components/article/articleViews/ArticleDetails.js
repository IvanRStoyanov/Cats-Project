import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import requester from "../../../utility/requester";
import Article from "./Article";

export default class ArticleDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: ''
        }
    }

    componentDidMount = () => {
        requester.get('appdata', 'articles/' + this.props.match.params.id, 'kinvey')
            .then(article => {
                this.setState({article: <Article {...article} />});
            })
            .catch(err => (
                this.history.push('/article/list/' + this.props.match.params.type)
            ));
    };

    render(){
        return(
            <Fragment>
                {this.state.article}
                <div className='control'>
                    <Link to={'/article/edit/' + this.props.match.params.type + '/' + this.props.match.params.id} >
                        <input type='button' value='edit' />
                    </Link>
                    <Link to={'/article/delete/' + this.props.match.params.type + '/' + this.props.match.params.id} >
                        <input type='button' value='delete' />
                    </Link>
                </div>
            </Fragment>
        );
    }
};