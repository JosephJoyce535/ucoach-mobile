import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
//import { TextInput } from 'react-native-web';
import { useState, useEffect } from 'react';
import { ref, set, update, onValue, remove } from "firebase/database";
import { db } from '../config/firebase'; 
import { Button } from 'react-native-elements';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App({navigation}) {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  const { user } = useAuthentication(); 
  const [email, setEmail] = useState('');
  const [trainingDistance1, setDistance1] = useState('');
  const [trainingDistance2, setDistance2] = useState('');
  const [trainingDistance3, setDistance3] = useState('');
  const [trainingDistance4, setDistance4] = useState('');
  const [time1, setTime1] = useState('');
  const [time2, setTime2] = useState('');
  const [time3, setTime3] = useState('');
  const [time4, setTime4] = useState('');
  const [mileage, setMileage] = useState('');
  function start() {
    const username = user?.email.split('@')[0];
    const starCountRef = ref(db, 'users/' + username);
    onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data.distance1)
            setDistance1(data.distance1);
            setDistance2(data.distance2);
            setDistance3(data.distance3);
            setDistance4(data.distance4);
    });
  }
  //start();
  

  
  function submitData() {
    const username = user?.email.split('@')[0];
    const starCountRef = ref(db, 'users/' + username);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val(); 
      console.log(data)
      //if user.
      set(ref(db, 'users/' + username), {          
        email: user.email,
        goalEvent: data.goalEvent,
        athleteType: data.athleteType,
        goalTime: data.goalTime,
        distance1: data.distance1,
        distance2: data.distance2,
        distance3: data.distance3,
        distance4: data.distance4,
        time1: time1,
        time2: time2,
        time3: time3,
        time4: time4, 
        mileage: mileage,
        goalDate: data.goalDate,
      })
    });
  }
    function showData() {
        console.log(user?.email);
        const username = user?.email.split('@')[0];
        const starCountRef = ref(db, 'users/' + username);
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          console.log(data)
          setEmail(data.athleteType);   
          //tance1(data.distance1);
        });
    }
    
  return (
    <View style={styles.container} >
      
      <Button title="Load Events" buttonStyle={styles.control} onPress={start} />
      <Text>{'\n'}How many miles a week would you like to do(max)?</Text>
      <TextInput value={mileage} onChangeText={(mileage) => {setMileage(mileage)}} placeholder="" style={styles.textBoxes}></TextInput>
      <Text>{'\n'}Please enter your current estimated times for:</Text>
      <Text>{trainingDistance1}:</Text>
      <TextInput value={time1} onChangeText={(time1) => {setTime1(time1)}} placeholder="" style={styles.textBoxes}></TextInput>
      <Text>{trainingDistance2}:</Text>
      <TextInput value={time2} onChangeText={(time2) => {setTime2(time2)}} placeholder="" style={styles.textBoxes}></TextInput>
      <Text>{trainingDistance3}:</Text>
      <TextInput value={time3} onChangeText={(time3) => {setTime3(time3)}} placeholder="" style={styles.textBoxes}></TextInput>
      <Text>{trainingDistance4}:</Text>
      <TextInput value={time4} onChangeText={(time4) => {setTime4(time4)}} placeholder="" style={styles.textBoxes}></TextInput>
      <Button title="Submit Data" buttonStyle={styles.control} onPress={submitData} />

      <Button
          title="Go Home"
          onPress={() => navigation.navigate('Home')}
      />

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