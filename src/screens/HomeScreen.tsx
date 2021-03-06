import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import {RootStackParamList} from '../App';
import {fetchDogsFromApi, navigateToImageScreen} from '../utils';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

function HomeScreen({navigation}: {navigation: HomeScreenNavigationProp}) {
  const [dogs, setDogs] = useState();
  useEffect(() => {
    fetchDogsFromApi({}).then(response => setDogs(response));
  }, []);

  useEffect(() => {
    console.log(dogs);
  }, [dogs]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.container}>
        <Text>heycar Mobile Pairing Session Application</Text>
        <View style={styles.buttons}>
          <Button
            onPress={() => navigation.navigate('Counter')}
            title={'Counter Screen'}
          />
        </View>
        <View style={styles.buttons}>
          <Button
            onPress={() => navigateToImageScreen()}
            title={'Native Image Screen'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  buttons: {
    marginTop: 8,
  },
});
