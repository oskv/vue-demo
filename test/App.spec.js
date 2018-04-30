import { shallow } from '@vue/test-utils'
import Edetailers from '@/components/Edetailers.vue'

describe('App.vue', () => {
  const wrapper = shallow(Edetailers);
  //console.log(wrapper.find('aside .menu-items'));
  it('renders li for each item in props.items', () => {
    expect('aa').toEqual('aa');
  })
})
