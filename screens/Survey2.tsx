import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
//import { TextInput } from 'react-native-web';
import { useState, useEffect } from 'react';
import { ref, set, update, onValue, remove } from "firebase/database";
import { db } from '../config/firebase'; 
import { Button } from 'react-native-elements';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';


export default function App({navigation}) {
  const { user } = useAuthentication(); 
  const [email, setEmail] = useState('');
  const username = user?.email.split('@')[0];
  const starCountRef = ref(db, 'users/' + username);
  let trainingDistance1 = "";
  onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          console.log(data)
          trainingDistance1 = data.distance1;   
  });

  
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
        longRun: parseInt(data.longRun, 10),
        doubles: parseInt(data.doubles, 10)
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
        });
    }


  return (
    <View style={styles.container}>
      
      <Text>Current {trainingDistance1}:</Text>
      <TextInput value={email} onChangeText={(email) => {setEmail(email)}} placeholder="Email" style={styles.textBoxes}></TextInput>
      <button onClick={submitData}>Submit Data </button>
      <button onClick={showData}>Show Data </button>
      
        
       

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