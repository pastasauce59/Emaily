// SurveyForm shows a form for a user to add input

import _ from 'lodash'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom'
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
    { label: 'Survey Title', name: 'title' },
    { label: 'Subject Line', name: 'subject' },
    { label: 'Email Body', name: 'body' },
    { label: 'Recipient List', name: 'emails' }
]

class SurveyForm extends Component{

    renderFields(){
        // return (
        //     <div>
        //         <Field label='Survey Title' type='text' name='title' component={SurveyField} />
        //         <Field label='Subject Line' type='text' name='subject' component={SurveyField} />
        //         <Field label='Email Body' type='text' name='body' component={SurveyField} />
        //         <Field label='Recipient List' type='text' name='emails' component={SurveyField} />
        //     </div>
        // )
        return _.map(FIELDS, ({ label, name }) => {
            return <Field key={name} component={SurveyField} type='text' label={label} name={name} />
        })

    }

    render() { 
        return (
            <div>
                Inside SurveyForm Component
                {/* props.handleSubmit function is given automatically by reduxForm helper */}
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {/* <Field type='text' name='surveyTitle' component='input' /> */}
                    {this.renderFields()}
                    <Link to='/surveys' className='red btn-flat white-text'>
                        Cancel
                    </Link>
                    <button className='teal btn-flat right white-text' type='submit'>
                        Next
                        <i className='material-icons right'>done</i>
                    </button>
                </form>
            </div>
        )
    } 
}

// validation logic
function validate(values) {
    const errors = {};

    errors.emails = validateEmails(values.emails || '')

    _.each(FIELDS, ({ name }) => {
        if (!values[name]){
            if (name === 'emails'){
                errors[name] = `You must provide ${name} (at least one)`
            } else {
                errors[name] = `You have to provide a ${name}`
            }
        }
    })

    return errors
}

export default reduxForm({
    // ES6 destructure of validate: validate,
    validate,
    form: 'surveyForm'
})(SurveyForm);