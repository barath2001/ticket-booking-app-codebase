import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Login from './components/Login'

Enzyme.configure({ adapter: new Adapter() })

describe('Test Case For App', () => {
  it('should render button', () => {
    const wrapper = shallow(<Login />)
    const buttonElement  = wrapper.find('#login-button');
    expect(buttonElement).toHaveLength(1);
    expect(buttonElement.text()).toEqual('Log In');
  })
  it('should display login heading', () => {
    const wrapper = shallow(<Login />)
    const loginElement = wrapper.find('#login-heading');
    expect(loginElement.text()).toEqual('Login');
  })
})