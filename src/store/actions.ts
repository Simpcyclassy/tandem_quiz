import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import { Mutations } from './mutations'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.GET_CORRECT_ANSWER_COUNT](
    { commit }: AugmentedActionContext,
    payload: number
  ): Promise<number>;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.GET_CORRECT_ANSWER_COUNT] ({ commit }, payload: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit(MutationTypes.SET_CORRECT_ANSWERS, payload)
        resolve(payload)
      }, 500)
    })
  }
}
