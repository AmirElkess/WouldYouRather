import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import AnsweredQuesion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'

function QuestionDetails({ questions, authedUser }) {
    const { id } = useParams()
    let isAnswered = false

    if (!questions[id]) {
        return (
            <h2>This question is currently unreachable.</h2>
        )
    }

    const question = questions[id]

    if (question.optionOne.votes.includes(authedUser)
        || question.optionTwo.votes.includes(authedUser)) {
        isAnswered = true
    }

    return (
        <div>
            {isAnswered 
            ? <AnsweredQuesion id={id}/>
            : <UnansweredQuestion id={id}/>}
        </div>
    )
}

function mapStateToProps({ questions, authedUser }) {
    return { questions, authedUser }
}

export default connect(mapStateToProps)(QuestionDetails)