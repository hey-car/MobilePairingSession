/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {fetchDogsFromApi} from '../utils';

export function RecommendationScreen() {
  const [limit, onChangeLimitText] = React.useState('1');
  const [page, onChangePageText] = React.useState('1');
  const [dogs, setDogs] = useState();

  const search = () => {
    // @ts-ignore
    fetchDogsFromApi({limit, page}).then(response => setDogs(response));
  };

  return (
    <View>
      <ScrollView contentContainerStyle={{padding: 12}}>
        <Text>Limit</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeLimitText}
          value={limit}
        />
        <Text>Page</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePageText}
          value={page}
        />
        <Button title={'Search'} onPress={search} />
        {dogs &&
          (dogs as []).map(dog => (
            <View>
              <Text>{(dog as any).breeds[0].name}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
