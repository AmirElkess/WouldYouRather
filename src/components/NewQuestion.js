import React, { Component } from 'react'
import { Card, Button, Form } from 'react-bootstrap'
import { handleAddQuestion } from '../actions/questions'
import {connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class NewQuestion extends Component {

    state = {
        toHome: false
    }

    addQuestion = (e) => {
        e.preventDefault()

        const option1 = document.getElementById("option1").value
        const option2 = document.getElementById("option2").value

        const _question = {
            author: this.props.authedUser,
            optionOneText: option1,
            optionTwoText: option2
        }

        this.props.dispatch(handleAddQuestion(_question))

        this.setState({
            toHome: true
        })
    }

    render() {

        if (this.state.toHome) {
            return <Redirect to="/" />
        }

        return (
            <center>
                <Card bg="dark" text="white" style={{ width: '25rem' }}>
                    <Card.Header>Create a new Question!</Card.Header>
                    <Card.Body>
                        <Card.Title>Would you Rather:</Card.Title>
                        <Form>
                            <Form.Group controlId="option1">
                                <Form.Control type="text" placeholder="First choice" />
                            </Form.Group>
                            Or
                            <Form.Group controlId="option2">
                                <Form.Control type="text" placeholder="Second choice" />
                            </Form.Group>
                            <Button variant="primary" onClick={this.addQuestion} type="submit">Submit Question</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </center>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    return ({
        authedUser
    })
}

export default connect(mapStateToProps)(NewQuestion)