import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import requester from "../../utility/requester";
import isInRole from '../../utility/isInRole';

export default class CatDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cat: ''
        }
    }

    componentDidMount = () => {
        requester.get('appdata', 'cats/' + this.props.match.params.id, 'kinvey')
            .then(cat => {
                this.setState({cat:(
                    <div>
                        <img src={cat.picture} alt='cat'/>
                        <div className='details'>
                            <p>Name: {cat.name}</p>
                            <p>Age: {cat.age}</p>
                            <p>Breed: {cat.breed}</p>
                            <p>Color: {cat.color}</p>
                            <p>Owner: {cat.owner}</p>
                        </div>
                    </div>
                    )});
            })
            .catch(console.log);
    };

    render(){
        return(
            <Fragment>
                <div>
                    {this.state.cat}
                </div>
                {isInRole('admin')
                ? <div>
                     <Link to={'/cat/delete/'+ this.props.match.params.id}><input type="button" value='delete' /></Link>
                  </div>
                : null}
            </Fragment>
        );
    }
};