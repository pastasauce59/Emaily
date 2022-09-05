import React, { useState } from 'react'
import { reduxForm } from 'redux-form'
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

let SurveyNew = () => {

    const [showFormReview, setShowFormReview] = useState(false)

    let renderContent = () => {
        if (showFormReview){
            return <SurveyFormReview 
            onCancel={() => { setShowFormReview(false) }} />
        }

        return <SurveyForm 
        onSurveySubmit={() => {
            setShowFormReview(true)
        }} />
    }

    return (
        <div>
            {renderContent()}
        </div>
    )
}

SurveyNew = reduxForm({
    form: 'surveyForm'
})(SurveyNew)

export default SurveyNew;