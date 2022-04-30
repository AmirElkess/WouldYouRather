import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import QuestionCover from './QuestionCover'
import { connect } from 'react-redux'

class Home extends Component {

    state = {
        key: "unans"
    }

    setKey = (k) => {
        this.setState({
            key: k
        })
    }

    render() {
        const { authedUser, questions } = this.props
        let answeredQ = []
        let unansweredQ = []
        for (let question of Object.keys(questions)) {
            question = questions[question]
            if (question.optionOne.votes.includes(authedUser)
                || question.optionTwo.votes.includes(authedUser)) {
                answeredQ.push(question)
            } else {
                unansweredQ.push(question)
            }
        }

        answeredQ.sort((a,b) => {return b.timestamp - a.timestamp})
        unansweredQ.sort((a,b) => {return b.timestamp - a.timestamp})

        return (
            <Tabs
                id="controlled-tab-example"
                activeKey={this.state.key}
                onSelect={(k) => this.setKey(k)}>
                <Tab eventKey="unans" title="Unanswered Questions">
                    {unansweredQ.map((question) => <QuestionCover key={question.id} question={question} />)}
                </Tab>
                <Tab eventKey="ans" title="Answered Questions">
                    {answeredQ.map((question) => <QuestionCover key={question.id} question={question} />)}

                </Tab>
            </Tabs>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }) {
    return {
        authedUser,
        questions,
        users
    }
}

export default connect(mapStateToProps)(Home)