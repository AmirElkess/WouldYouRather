import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScoreCard from './ScoreCard'

class Leaderboard extends Component {
    state = {
        updateCounter: 0
    }

    processUser = (user, questions) => {
        let nAsked = 0
        let nAnswered = 0

        for (let question of Object.keys(questions)) {
            question = questions[question]
            if (question.author === user.id) {
                nAsked = nAsked + 1
            }
            if (question.optionOne.votes.includes(user.id)
            || question.optionTwo.votes.includes(user.id)) {
                nAnswered = nAnswered + 1
            }
        }

        

        return {
            name: user.name,
            answered: nAnswered,
            asked: nAsked,
            total: nAnswered + nAsked,
            avatar: user.avatarURL
        }
    }

    render() {
        let processedUsers = []
        const { users, questions } = this.props

        Object.keys(users).forEach((user) => {
            processedUsers.push(this.processUser(users[user], questions))
        })

        processedUsers.sort((a, b) => { return b.total - a.total })

        return (
            <center>
                {processedUsers.map((user) => {
                    let i = processedUsers.indexOf(user) + 1
                    return <ScoreCard rank={i} total={user.total} key={i} userDetails={user} />
                })}
            </center>
        )
    }
}

function mapStateToProps({ users, questions }) {
    return {
        users,
        questions
    }
}

export default connect(mapStateToProps)(Leaderboard)