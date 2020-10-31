import { createLocalVue, shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import Vuetify from 'vuetify'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it(`check if child Header exists`, () => {
    const wrapper = shallowMount(App, {
      localVue,
      mocks: {
        $vuetify: {
          lang: {
            t: (val: string) => val
          }
        }
      },
      vuetify: new Vuetify(),
    })
    expect(wrapper.findComponent(Header).exists()).toBe(true)
  })
})
