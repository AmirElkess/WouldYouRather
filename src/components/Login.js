import React, { Component } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { setAuthedUser } from '../actions/authedUser'


class Login extends Component {
    setUserId = (e) => {
        e.preventDefault()
        const AUTHED_ID = document.getElementById("user_id").value
        this.props.dispatch(setAuthedUser(AUTHED_ID))
    }

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        const { users } = this.props

        return (

            <center>
                {this.props.loading === true
                    ? <h1>Loading</h1>
                    : <Card bg="dark" text="white" style={{ width: '70%', margin: '5rem' }}>
                        <Card.Header>Login</Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="user_id">
                                    <Form.Label>Select username</Form.Label>
                                    <Form.Control as="select">
                                        {Object.keys(users).map((user) => <option value={users[user].id} key={user}>{users[user].name}</option>)}
                                    </Form.Control>
                                </Form.Group>
                                <Button variant="primary" onClick={this.setUserId} type="submit">Enter</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                }
            </center>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        loading: Object.keys(users).length === 0,
        users
    }
}


export default connect(mapStateToProps)(Login)