/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import WordChange from '../components/WordChange';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<WordChange />);
});

describe('word change component with hooks', () => {
  test('render shows h1', () => {
    expect(wrapper.find('h1').text()).toContain('Crazy Word Changer!!');
  });

  test('renders intro prop', () => {
    const intro = 'Welcome to the incredible word changing machine.';
    wrapper = shallow(<WordChange intro={intro} />);
    expect(wrapper.find('#intro').text()).toMatch(intro);
  });

  test('renders input for word', () => {
    expect(wrapper.find('#word-input').prop('placeholder')).toBe(
      'Your word...'
    );
  });

  test('renders submit button', () => {
    expect(wrapper.find('#btn').text()).toBe('Update');
  });

  test('renders state change on input change and updates div when click button', () => {
    wrapper.find('#word-input').simulate('change', {
      target: {
        value: 'word',
      },
    });
    wrapper.find('#btn').simulate('click');

    expect(wrapper.find('#your-word').text()).toBe('word');
  });
});
