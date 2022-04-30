import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Navbar, Nav } from 'react-bootstrap'
import { removeAuthedUser } from '../actions/authedUser'



class Navigation extends Component {
    state = {
        toHome: false
    }

    logout = () => {
        this.setState({
            toHome: true
        }, () => {
            this.props.dispatch(removeAuthedUser())
        })
        
    }

    render() {
        const { authedUser, users } = this.props

        return (
            <Navbar bg="light" expand="lg">
                {this.state.toHome && <Redirect to="/" />}
                <Navbar.Brand>WyR?</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/add">Create a Question</Nav.Link>
                        <Nav.Link as={Link} to="/leaderboard">Leaderboard</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={this.logout}>Logout from {users[authedUser].name}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(Navigation)