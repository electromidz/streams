import React, { Component } from 'react';
import { Field , reduxForm } from 'redux-form';

class StreamCreate extends Component {

    renderError = ({touched , error}) => {
        if(touched && error) {
            return(
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );    
        };
    };
renderInput = ({input , lable , meta}) => {
    return (
        <div className="field">
        <div className={`field ${meta.touched && meta.error ? 'error' : ''} `}>
            <lable>{ lable }</lable>
            <input { ...input } />
        </div>
        <div> { this.renderError(meta) } </div>
        </div>
    );
};

onSubmit(formValues) {
    console.log(formValues);
}

    render() {
        return (
            <form className="ui form error" onSubmit={ this.props.handleSubmit(this.onSubmit) }>
                <Field name="title" component={this.renderInput} lable="Title" />
                <Field name="description" component={this.renderInput} lable="Description" />
                <button className="button ui primary">Submit</button>
            </form>
        );
    };
};

const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if(!formValues.description){
        errors.description = 'You must enter description';
    }

    return errors;
};

export default reduxForm({
    form: 'streamCreate',
    validate : validate,
})(StreamCreate);
