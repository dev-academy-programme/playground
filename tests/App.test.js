import React from 'react'
import { shallow } from 'enzyme'

import App from '../client/components/App'

test('<App />', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('.app-container')).toHaveLength(1)
})
