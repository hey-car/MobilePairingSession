import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import {store} from './store/store';
import {CounterScreen} from './screens/CounterScreen';
import {RecommendationScreen} from './screens/RecommendationScreen';

export type RootStackParamList = {
  Home: undefined;
  Counter: undefined;
  Recommendation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Counter" component={CounterScreen} />
          <Stack.Screen
            name="Recommendation"
            component={RecommendationScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
