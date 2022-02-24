import {act, fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {CounterScreen} from './CounterScreen';
import configureMockStore from 'redux-mock-store';
import {getRootStateMock} from '../utils';
import * as counterReducer from '../store/counter/counterSlice';

const mockStore = configureMockStore();
const store = mockStore(getRootStateMock());
const setup = () => {
  const wrapper = render(
    <ReduxProvider store={store}>
      <CounterScreen />
    </ReduxProvider>,
  );
  return {
    wrapper,
  };
};

describe('CounterScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the text', () => {
    const {wrapper} = setup();
    const increment = wrapper.queryAllByText('Increment');
    expect(increment).toHaveLength(1);
    const decrement = wrapper.queryAllByText('Decrement');
    expect(decrement).toHaveLength(1);
    const count = wrapper.queryAllByText('0');
    expect(count).toHaveLength(1);
  });

  it('increment the counter', async () => {
    const incrementSpy = jest.spyOn(counterReducer, 'increment');

    const {wrapper} = setup();
    const increment = wrapper.getByText('Increment');
    await act(async () => {
      await fireEvent.press(increment);
    });

    expect(incrementSpy).toHaveBeenCalledTimes(1);
  });
});
