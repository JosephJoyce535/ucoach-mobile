import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import { getAuth, signOut } from 'firebase/auth';
//import {db} from './config/firebase.ts'
import  {collection,addDoc} from 'firebase/firestore'
import { firebase } from '@react-native-firebase/database';
import * as ScreenOrientation from 'expo-screen-orientation';

const auth = getAuth();


export default function HomeScreen({navigation}) {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  const { user } = useAuthentication();
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.container}>
      <Text>Welcome {user?.email}!</Text>
      
      <Button
          title="Survey"
          onPress={() => navigation.navigate('Survey')}
        />
      <Button
          title="Data"
          color="green"
          onPress={() => navigation.navigate('Data')}
      />
      <Button
          title="Workout Calendar"
          color="green"
          onPress={() => navigation.navigate('Calendar')}
      />

      <Button title="Sign Out" style={styles.button} onPress={() => signOut(auth)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});