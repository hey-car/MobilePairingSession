import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {decrement, increment} from '../store/counter/counterSlice';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {RootState} from '../store/store';

export function CounterScreen() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Button title={'Increment'} onPress={() => dispatch(increment())} />
      <Text>{count}</Text>
      <Button title={'Decrement'} onPress={() => dispatch(decrement())} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
