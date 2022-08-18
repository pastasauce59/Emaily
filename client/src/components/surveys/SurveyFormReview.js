// SurveyFormReview shows users their form inputs for review
import _ from 'lodash'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import formFields from './formFields'
// Cannot use withRouter with react-router-dom 6+
// import { withRouter } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import * as actions from '../../actions'

const SurveyFormReview = ({ onCancel }) => {
    const formValues = useSelector(state => state.form.surveyForm.values)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        )
    })

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button
                className='yellow white-text darken-3 btn-flat'
                onClick={onCancel}
            >
                Back
            </button>
            <button 
                onClick={ () => dispatch(actions.submitSurvey(formValues, navigate)) }
                className='green white-text btn-flat right'>
                Send Survey
                <i className='material-icons right'>email</i>
            </button>
        </div>
    )
}

export default SurveyFormReview;