import React, { useEffect } from 'react'
import * as actions from '../../actions'
import { useSelector, useDispatch } from 'react-redux'
 

const SurveyList = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(actions.fetchSurveys())
    }, [])

    const surveys = useSelector(state => state.surveys)

    let renderSurveys = () => {
        return surveys.reverse().map(survey => {
            return (
                <div key={survey._id} className='card blue-grey darken-1'>
                    <div className='card-content white-text'>
                        <span className='card-title'>{survey.title}</span>
                        <p>
                            {survey.body}
                        </p>
                        <p className='right'>
                            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                    <div className='card-action'>
                        <a>Yes: {survey.yes}</a>
                        <a>No: {survey.no}</a>
                    </div>
                </div>
            )
        })
    }


    return (
        <div>
            {renderSurveys()}
        </div>
    )
}

export default SurveyList