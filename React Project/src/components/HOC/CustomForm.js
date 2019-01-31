import React, {Component, Fragment} from 'react';
import {Redirect} from 'react-router-dom';


export default function withCustomForm(Form, modelState, submitFunc) {
    return class CustomForm extends Component{
        constructor(props){
            super(props);
            this.state = {
                errorMessage: '',
                targetPoint: this.props.target,
				redirect: '',
                ...modelState.default
            }
        }

        onChangeHandler = (ev) => {
            let fieldName = ev.target.name;
            let fieldValue = ev.target.value;
            let newState = {};
            newState[fieldName] = fieldValue;
            this.setState(newState);
        };

        formHandler = (ev) => {
            ev.preventDefault();
            let errorMessage = modelState.errorMsg(this.state);
            if(!errorMessage){
                submitFunc.send(this.state)
                .then(res => {
					let redirectPath = submitFunc.success(res)
					this.setState({redirect: redirectPath})
				})
                .catch(err => this.setState({errorMessage: err.responseJSON.description}))
           }
            this.setState({errorMessage})
        };

        errorNotify = () => (
            this.state.errorMessage !== '' ? <h2 className='err'>{this.state.errorMessage}</h2> : null
        );

        render () {
            return (
				<Fragment>
				{this.state.redirect !== '' ? <Redirect to={this.state.redirect}  /> : null}
				{this.errorNotify()}
				<Form
                    formHandler={this.formHandler}
                    onChangeHandler={this.onChangeHandler}
                    errorNotify={this.errorNotify}
                    {...this.state}
                />
				</Fragment>
				)
        }
    }
}