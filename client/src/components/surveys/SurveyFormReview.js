// SurveyFormReview shows users their form inputs for review
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const SurveyFormReview = ({ onCancel }) => {

    const formValues = useSelector(state => state.form.surveyForm.values)
    console.log(formValues)

    return (
        <div>
            <h5>Please confirm your entries</h5>
            <button
                className='yellow darken-3 btn-flat'
                onClick={onCancel}
            >
                Back
            </button>
        </div>
    )
}

export default SurveyFormReview;