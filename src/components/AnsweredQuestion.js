import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, ProgressBar } from 'react-bootstrap'

class AnsweredQuestion extends Component {
    render() {
        const { id } = this.props
        const question = this.props.questions[id]
        const avatarURL = this.props.users[question.author].avatarURL
        const authorName = this.props.users[question.author].name
        const totalAnswered = question.optionOne.votes.length + question.optionTwo.votes.length
        const firstPercentage = (question.optionOne.votes.length / totalAnswered) * 100
        const secondPercentage = (question.optionTwo.votes.length / totalAnswered) * 100
        let firstLabel = ''
        let secondLabel = ''
        
        if (question.optionOne.votes.includes(this.props.authedUser)) {
            firstLabel = `${firstPercentage}% (Your choice)`
            secondLabel = `${secondPercentage}%`
        } else {
            firstLabel = `${firstPercentage}%`
            secondLabel = `${secondPercentage}% (Your choice)`
        }


        return (
            <center>

                <Card bg="dark" text="white" style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={avatarURL} />
                    <Card.Body>
                        <Card.Title>Would you Rather:</Card.Title>
                        <Card.Text>
                            <span style={{ color: "green" }}>{question.optionOne.text} </span>
                            <span> ({question.optionOne.votes.length} votes) </span>
                        </Card.Text>
                        <Card.Text>
                            OR
                        </Card.Text>
                        <Card.Text>
                            <span style={{ color: "orange" }}> {question.optionTwo.text}</span>
                            <span> ({question.optionTwo.votes.length} votes) </span>

                        </Card.Text>
                        <ProgressBar>
                            <ProgressBar striped variant="success" label={firstLabel} now={firstPercentage} key={1} />
                            <ProgressBar striped variant="warning" label={secondLabel} now={secondPercentage} key={2} />
                        </ProgressBar>
                    </Card.Body>
                    <Card.Footer>A Question by {authorName}</Card.Footer>
                </Card>
            </center>
        )
    }
}

function mapStateToProps({ questions, authedUser, users }) {
    return { questions, authedUser, users }
}

export default connect(mapStateToProps)(AnsweredQuestion)