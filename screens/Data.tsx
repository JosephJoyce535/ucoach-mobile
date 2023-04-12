import React  from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Button } from 'react-native-elements';
import { ref, set, update, onValue, remove } from "firebase/database";
import { db } from '../config/firebase'; 
import { getAuth, signOut } from 'firebase/auth';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { useState, useEffect } from 'react';

const auth = getAuth();

export default function Data() {
  const { user } = useAuthentication();  
  const [athleteType, setAthleteType] = useState('');
  const [goalEvent, setGoalEvent] = useState('');
  const [goalTime, setGoalTime] = useState('');
  const [goalDate, setGoalDate] = useState('');
  const [mileage, setMileage] = useState('');
  const [trainingDistance1, setDistance1] = useState('');
  const [trainingDistance2, setDistance2] = useState('');
  const [trainingDistance3, setDistance3] = useState('');
  const [trainingDistance4, setDistance4] = useState('');
  const [time1, setTime1] = useState('');
  const [time2, setTime2] = useState('');
  const [time3, setTime3] = useState('');
  const [time4, setTime4] = useState('');
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
      setGoalDate(data.goalDate);
      setMileage(data.mileage);
      setDistance1(data.distance1);
      setDistance2(data.distance2);
      setDistance3(data.distance3);
      setDistance4(data.distance4);
      setTime1(data.time1);
      setTime2(data.time2);
      setTime3(data.time3);
      setTime4(data.time4);
    });
  }
    return (
      <View style={styles.container}>
        <Text>Display Data Screen!</Text>


        <Text>Athlete Type:</Text>
        <TextInput 
          placeholder='Athlete Type'
          value={athleteType} 
          onChangeText={(athleteType) => {setAthleteType(athleteType)}}
        />
        
        <Text>Goal Event:</Text>
        <TextInput 
          placeholder='Goal Event'
          value={goalEvent} 
          onChangeText={(goalEvent) => {setGoalEvent(goalEvent)}} 
          style={styles.textBoxes}
        />
        
        <Text>Goal Time:</Text>
        <TextInput 
          placeholder='Goal Time'
          value={goalTime} 
          onChangeText={(goalTime) => {setGoalTime(goalTime)}} 
          style={styles.textBoxes}
        />
        
        <Text>Goal Date:</Text>
        <TextInput 
          placeholder='Goal Date'
          value={goalDate} 
          onChangeText={(goalDate) => {setGoalDate(goalDate)}} 
          style={styles.textBoxes}
        />
        
        <Text>Weekly Mileage:</Text>
        <TextInput value={mileage} onChangeText={(mileage) => {setMileage(mileage)}} placeholder='Mileage' style={styles.textBoxes}></TextInput>
        
        <Text>{trainingDistance1}:</Text>
        <TextInput value={time1} onChangeText={(time1) => {setTime1(time1)}} placeholder='' style={styles.textBoxes}></TextInput>
        
        <Text>{trainingDistance2}:</Text>
        <TextInput value={time2} onChangeText={(time2) => {setTime2(time2)}} placeholder='' style={styles.textBoxes}></TextInput>
        
        <Text>{trainingDistance3}:</Text>
        <TextInput value={time3} onChangeText={(time3) => {setTime3(time3)}} placeholder='' style={styles.textBoxes}></TextInput>
        
        <Text>{trainingDistance4}:</Text>
        <TextInput value={time4} onChangeText={(time4) => {setTime4(time4)}} placeholder='' style={styles.textBoxes}></TextInput>
        
        <Button title="Show Data" buttonStyle={styles.control} onPress={readData} />
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
  },
  controls: {
    flex: 1,
  },

  control: {
    marginTop: 10
  },

  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  }
});