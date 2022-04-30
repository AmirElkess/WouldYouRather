import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Form } from 'react-bootstrap'
import {handleAddQuestionAnswer} from '../actions/questions'

class UnansweredQuestion extends Component {
    handleSubmit = (e, authedUser, qid) => {
        e.preventDefault()
        const answer = this.form.pollAnswer.value;
        this.props.dispatch(handleAddQuestionAnswer({authedUser, qid, answer}))
    }

    render() {
        const { id, authedUser } = this.props
        const question = this.props.questions[id]
        const avatarURL = this.props.users[question.author].avatarURL
        const authorName = this.props.users[question.author].name

        return (
            <center>
                <Card bg="dark" text="white" style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={avatarURL} />
                    <Card.Body>
                        <Card.Title>Would you Rather:</Card.Title>
                        <Form ref={(f) => (this.form = f)}>
                            <Form.Check name="pollAnswer" type="radio" label={question.optionOne.text} id="l1" value="optionOne"/>
                            <Form.Check name="pollAnswer" type="radio" label={question.optionTwo.text} id="l2" value="optionTwo"/>
                            <Button variant="primary" onClick={(e) => this.handleSubmit(e, authedUser, id)} type="submit">Vote!</Button>
                        </Form>
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

export default connect(mapStateToProps)(UnansweredQuestion)