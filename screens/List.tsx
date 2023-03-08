import React  from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { ref, set, update, onValue, remove } from "firebase/database";
import { db } from '../config/firebase'; 
import { getAuth, signOut } from 'firebase/auth';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { useState, useEffect } from 'react';

const auth = getAuth();

export default function List() {
  const { user } = useAuthentication();  
  const [athleteType, setAthleteType] = useState('');
  const [goalEvent, setGoalEvent] = useState('');
  const [goalTime, setGoalTime] = useState('');
  function readData() {
    console.log(user?.email);
    const username = user?.email.split('@')[0];
    const starCountRef = ref(db, 'users/' + username);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      setAthleteType(data.athleteType);  
      setGoalEvent(data.goalEvent);
      setGoalTime(data.goalTime);

    });
  }
    return (
      <View style={styles.container}>
        <Text>Athlete Type:</Text>
        <TextInput value={athleteType} onChangeText={(athleteType) => {setAthleteType(athleteType)}} placeholder="Athlete Type" style={styles.textBoxes}></TextInput>
        <Text>Goal Event:</Text>
        <TextInput value={goalEvent} onChangeText={(goalEvent) => {setGoalEvent(goalEvent)}} placeholder="Goal Event" style={styles.textBoxes}></TextInput>
        <Text>Goal Time:</Text>
        <TextInput value={goalTime} onChangeText={(goalTime) => {setGoalTime(goalTime)}} placeholder="Goal Time" style={styles.textBoxes}></TextInput>
        <button onClick={readData}>Show Data </button>  
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
  textBoxes: {
    width: '90%', 
    fontSize: 18,
     padding: 12,
      borderColor: 'gray', 
    borderWidth: 0.2,
     borderRadius: 10
  }   
});