import { createLocalVue, mount } from '@vue/test-utils'
import QuizScore from '@/views/QuizScore.vue'
import Vuetify from 'vuetify'
import router from '../../src/router'
import storeConfig from '../store'
import { cloneDeep } from 'lodash'
import Vuex from 'vuex'

describe('Welcome.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  let vuetify

  const { location } = window

  beforeAll(() => {
    // @ts-ignore
    delete window.location

    window.location = { ...window.location, assign: jest.fn() }
  })

  afterAll(() => {
    window.location = location
  })

  beforeEach(() => {
    vuetify = new Vuetify({})
  })

  const store = new Vuex.Store(cloneDeep(storeConfig))

  const wrapper = mount(QuizScore, {
    localVue,
    vuetify,
    router,
    store
  })

  it('questions should not repeat in a round', () => {
    const quiz = store.getters.getAllQuiz      
    const duplicateExists = (array, keyName) => {
        return new Set(array.map(item => item[keyName])).size !== array.length
    }

    expect(duplicateExists(quiz, 'question')).toBeFalsy();
  })
})
