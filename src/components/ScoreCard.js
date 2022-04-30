import React, { Component } from 'react'
import { Card, Row, Col } from 'react-bootstrap'

class ScoreCard extends Component {

    render() {
        let { userDetails, rank } = this.props

        return (
            <center>
                <Card bg="dark" text="white" style={{ width: '30rem', margin: "1rem" }}>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src={userDetails.avatar} />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>{userDetails.name}</Card.Title>
                                <Card.Text>
                                    Questions Answered: {userDetails.answered}
                                </Card.Text>
                                <Card.Text>
                                    Questions Asked: {userDetails.asked}
                                </Card.Text>
                                <Card.Text>
                                    Total Score: {userDetails.total}
                                </Card.Text>

                            </Card.Body>
                        </Col>
                    </Row>

                    <Card.Footer>Rank: {rank}</Card.Footer>
                </Card>
            </center>
        )
    }
}

export default ScoreCard