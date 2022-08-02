// SurveyNew shows: SurveyForm & SurveyFormReview

import React, { useState } from 'react'
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

const SurveyNew = () => {

    const [showFormReview, setShowFormReview] = useState(false)

    let renderContent = () => {
        if (showFormReview){
            return <SurveyFormReview />
        }

        return <SurveyForm 
        onSurveySubmit={() => {
            setShowFormReview(true)
        }} />
    }

    return (
        <div>
            {/* Inside SurveyNew Component
            <SurveyForm /> */}
            {renderContent()}
        </div>
    )
}

export default SurveyNew;