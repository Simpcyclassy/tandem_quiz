import { GetterTree } from 'vuex'
import { State } from './state'

export type Getters = {
  getCorrectAnswerCount(state: State): number;
  getQuizCount(state: State): number;
  getAllQuiz(state: State): { question: string; incorrect: string[]; correct: string }[];
}

export const getters: GetterTree<State, State> & Getters = {
  getCorrectAnswerCount: (state) => {
    return state.correctAnswerCount
  },
  getQuizCount: (state) => {
    return state.quizSet.length
  },
  getAllQuiz: (state) => {
    return state.quizSet
  }
}
