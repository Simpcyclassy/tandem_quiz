import { createLocalVue, mount } from '@vue/test-utils'
import QuestionCard from '@/views/QuestionCard.vue'
import Vuetify from 'vuetify'
import router from '../../src/router'
import storeConfig from '../store'
import { cloneDeep } from 'lodash'
import Vuex from 'vuex'

describe('Welcome.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify({})
  })

  const store = new Vuex.Store(cloneDeep(storeConfig))

  const wrapper = mount(QuestionCard, {
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

    expect(duplicateExists(quiz, 'question')).toBeFalsy()
  })

  it('user can select only 1 answer out of the possible answers', async () => {
    const event = jest.fn()
    await wrapper.setData({ selectedIndex: 1 })
    await wrapper.setData({ selectedIndex: 0 })
    await wrapper.setData({ selectedIndex: 2 })
    expect((wrapper.vm as any).selectedIndex).not.toBe(0)
    expect((wrapper.vm as any).selectedIndex).not.toBe(1)
    expect((wrapper.vm as any).selectedIndex).toBe(2)
  })

})
