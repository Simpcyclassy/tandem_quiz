import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { State, quizSet } from './state'

export type Mutations<S = State> = {
  [MutationTypes.SET_CORRECT_ANSWERS](state: S, payload: number): void;
  [MutationTypes.RESET_STATE](state: S, payload: number): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_CORRECT_ANSWERS] (state, payload: number) {
    state.correctAnswerCount = payload
  },
  [MutationTypes.RESET_STATE] (state, payload: number) {
    state.correctAnswerCount = payload
    state.quizSet = quizSet
  }
}
