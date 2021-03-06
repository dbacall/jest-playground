/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import MultipleWords from '../components/MultipleWords';

// eslint-disable-next-line no-undef
describe('multiple word input with hooks', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MultipleWords />);
  });

  test('renders title', () => {
    expect(wrapper.find('h1').text()).toBe('Add many words!');
  });

  test('renders input with placeholder text', () => {
    expect(wrapper.find('.input').prop('placeholder')).toBe('Your word...');
    expect(wrapper.find('.input').prop('value')).toBe('');
  });

  test('renders button', () => {
    expect(wrapper.find('button').text()).toBe('Add');
  });

  test('renders one word when added', () => {
    wrapper.find('input').simulate('change', {
      target: { value: 'first' },
    });
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    expect(wrapper.find('#words').text()).toBe('first');
  });

  test('renders two words when added', () => {
    wrapper.find('input').simulate('change', {
      target: { value: 'first' },
    });
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    expect(wrapper.find('.input').prop('value')).toBe('');
    wrapper.find('input').simulate('change', {
      target: { value: 'second' },
    });
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });

    expect(wrapper.find('#words').text()).toBe('first, second');
  });

  test('renders 3 words', () => {
    wrapper.setState({ printedWords: ['first', 'second', 'third'] });
    expect(wrapper.find('#words').text()).toBe('first, second, third');
  });

  test('renders error message if try enter number', () => {
    wrapper.find('input').simulate('change', {
      target: { value: 'fi78' },
    });
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    expect(wrapper.find('#error').text()).toBe('No numbers allowed.');
  });

  test('handleSubmit creates error', () => {
    wrapper.setState({ inputWord: '34fg' });
    wrapper.instance().handleSubmit({
      preventDefault: () => {},
    });
    expect(wrapper.state('error')).toBe('No numbers allowed.');
  });
});
