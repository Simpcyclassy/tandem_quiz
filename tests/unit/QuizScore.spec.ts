import { createLocalVue, mount } from '@vue/test-utils'
import QuizScore from '@/views/QuizScore.vue'
import Vuetify from 'vuetify'
import router from '../../src/router'
import storeConfig from '../store-config'
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

  it('should emit event when the play again button is clicked', () => {
    const event = window.location.assign = jest.fn()

    const button = wrapper.findComponent({ name: 'v-btn' })
    expect(button.exists()).toBe(true)

    expect(button.text()).toBe('Play again')

    button.trigger('click')
    expect(event).toHaveBeenCalled()
    expect(event).toBeCalledWith('/quiz')
  })
})
