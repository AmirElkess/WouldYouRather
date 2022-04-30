import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class QuestionCover extends Component {
    render() {
        const { question, users } = this.props

        return (
            <center>
                <Card bg="dark" text="white" style={{ width: '25rem', margin: "1rem" }}>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src={users[question.author].avatarURL} />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>Would you Rather:</Card.Title>
                                <Card.Text>
                                    {question.optionOne.text} or {question.optionTwo.text}
                                </Card.Text>
                                <Button variant="primary" as={Link} to={`questions/${question.id}`}>View the question!</Button>
                            </Card.Body>
                        </Col>

                    </Row>
                    <Card.Footer>A Question by {users[question.author].name}</Card.Footer>

                </Card>
            </center>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(QuestionCover)