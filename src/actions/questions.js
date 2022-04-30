import { saveQuestion, saveQuestionAnswer } from "../backend/api"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(q) {
    return (dispatch) => {
        return saveQuestion(q)
            .then((question) => {
                dispatch(addQuestion(question))
            })
    }
}

export function addQuestionAnswer({authedUser, qid, answer}) {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleAddQuestionAnswer({authedUser, qid, answer}) {
    return (dispatch) => {
        return saveQuestionAnswer({authedUser, qid, answer})
            .then(() => {
                dispatch(addQuestionAnswer({authedUser, qid, answer}))
            })
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}