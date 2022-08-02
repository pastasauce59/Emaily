// SurveyField contains logic to render a single label and text input

import React from 'react'

// using ES6 to destructure props and just get input i.e. props.input
// using ES6 nested destructuring for meta prop
export default ({ input, label, meta: { error, touched } }) => {

    return (
        <div>
            {/* surveyField component */}
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }}/>
            <div className='red-text' style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>
    )
}