import { getInitialData } from '../backend/api'
import { receiveQuestions } from '../actions/questions' //update
import { receiveUsers } from '../actions/users'


export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
            })
    }
}