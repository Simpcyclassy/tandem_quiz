import { createLocalVue, shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import Vuetify from 'vuetify'

describe('Header.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()    
  })

  const wrapper = shallowMount(Header, {
    localVue,
    vuetify,
  })

  it(`is a vue instance and match snapshot`, () => {

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render v-btn as anchor tag that opens the root path', () => {

    const button = wrapper.findComponent({ name: 'v-btn' })
    expect(button.exists()).toBe(true);
  
    expect(button.attributes('to')).toBe('/')
  });
})
