import { mount, shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('should test Header Component Exists', () => {
    const wrapper = mount(Header)

    expect(wrapper.name()).toBe('Header')
  })
})
