import { createLocalVue, mount } from '@vue/test-utils'
import Welcome from '@/views/Welcome.vue'
import Vuetify from 'vuetify'
import router from '../../src/router'

describe('Welcome.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify({})
  })

  const wrapper = mount(Welcome, {
    localVue,
    vuetify,
    router: router
  })

  it('should trigger when the start button is clicked', () => {
    const event = jest.fn();

    const button = wrapper.findComponent({ name: 'v-btn' })
    expect(button.exists()).toBe(true)

    expect(button.text()).toBe('Click to Start')

    button.vm.$on('click', event)
    expect(event).not.toHaveBeenCalled()

    button.trigger('click')
    expect(event).toHaveBeenCalledTimes(1)
  })
})
