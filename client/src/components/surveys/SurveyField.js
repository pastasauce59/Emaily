// SurveyField contains logic to render a single label and text input

import React from 'react'

// using ES6 to destructure props and just get input i.e. props.input
export default ({ input, label }) => {
    return (
        <div>
            {/* surveyField component */}
            <label>{label}</label>
            <input {...input}/>
        </div>
    )
}