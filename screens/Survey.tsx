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
  let gEvent = ""
  const [goalEvent, setGoalEvent] = useState('');
  const [trainingType, setTrainingType] = useState('');
  const [goalTime, setGoalTime] = useState('');
  const [goalDate, setGoalDate] = useState('');
  const [email, setEmail] = useState('');
  const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: '800m',
    value: '800m'
  }, {
    id: '2',
    label: '1600m',
    value: '1600m'
  }, {
    id: '3',
    label: '3200m',
    value: '3200m'
  }]
  const radioButtonsData2 = [{
    id: '4', // acts as primary key, should be unique and non-empty string
    label: 'Speed Type',
    value: 'Speed Type'
  }, {
    id: '5',
    label: 'Event Specialist',
    value: 'Event Specialist'
  }, {
    id: '6',
    label: 'Strength Type',
    value: 'Strength Type'
  }]

  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [radioButtons2, setRadioButtons2] = useState(radioButtonsData2);

    function onPressRadioButton(radioButtonsArray) {
      console.log(radioButtonsData);
      setRadioButtons(radioButtonsArray);
        console.log(radioButtonsData)
        if (radioButtonsData[0].selected) {
          console.log("800m");
          setGoalEvent("800m");
          gEvent = "800m"
        }
        else if (radioButtonsData[1].selected) {
          console.log("1600m")
          setGoalEvent("1600m");
          gEvent = "1600m"
        }
        else if (radioButtonsData[2].selected) {
          console.log("3200m")
          setGoalEvent("3200m");
          gEvent = "3200m"
        }
      
    }

    function onPressRadioButton2(radioButtonsArray2) {
      setRadioButtons2(radioButtonsArray2);
      //console.log(radioButtonsData2)
      if (radioButtonsData2[0].selected) {
        console.log("speed type")
        setTrainingType("speed type");
      }
      else if (radioButtonsData2[1].selected) {
        console.log("event specialist")
        setTrainingType("event specialist");
      }
      else if (radioButtonsData2[2].selected) {
        console.log("strength type")
        setTrainingType("strength type");
      }
    }


  function createData() {
    console.log("Goal Event:" + goalEvent)
    console.log("Athlete Type:" + athleteType)
    const username = user?.email.split('@')[0];
    console.log(username);
    let athleteType = "";
    let distance1 = "";
    let distance2 = "";
    let distance3 = "";
    let distance4 = "";
      if (goalEvent === "800m") {
        if (trainingType === "Speed") {
            athleteType = "400m/800m";
            distance1 = "200m";
            distance2 = "400m";
            distance3 = "800m";
            distance4 = "1600m";
        }
        else if (trainingType === "Specialist") {
            athleteType = "800m specialist";
            distance1 = "200m";
            distance2 = "400m";
            distance3 = "800m";
            distance4 = "1600m";
        }
        else {
            athleteType = "800m/1600m";
            distance1 = "400m";
            distance2 = "800m";
            distance3 = "1600m";
            distance4 = "3200m";
        }
      } 
      else if (goalEvent === "1600m") {
        if (trainingType === "Speed") {
          athleteType = "800m/1600m";
          distance1 = "400m";
          distance2 = "800m";
          distance3 = "1600m";
          distance4 = "3200m";
        }
        else if (trainingType === "Specialist") {
          athleteType = "1600m specialist";
          distance1 = "400m";
          distance2 = "800m";
          distance3 = "1600m";
          distance4 = "3200m";
        }
        else if (trainingType === "Strength") {
          athleteType = "1600m/3200m";
          distance1 = "800m";
          distance2 = "1600m";
          distance3 = "3200m";
          distance4 = "5000m";
        }
      } 
      else if (goalEvent === "3200m") {
        athleteType = "1600m/3200m"
        distance1 = "800m";
        distance2 = "1600m";
        distance3 = "3200m";
        distance4 = "5000m";
      }
    set(ref(db, 'users/' + username), {          
      email: user?.email,
      goalEvent: goalEvent,
      athleteType: athleteType,
      goalTime: goalTime,
      distance1: distance1,
      distance2: distance2,
      distance3: distance3,
      distance4: distance4,
      goalDate: goalDate,
    }).then(() => {
      // Data saved successfully!
      alert('data updated!');    
    }).catch((error) => {
      // The write failed...
      alert(error);
    });
  }

  function update () {

            // const newKey = push(child(ref(database), 'users')).key;

    update(ref(db, 'users/' + user?.email), {          
      email: email  
    }).then(() => {
      // Data saved successfully!
      alert('data updated!');    
  })  
      .catch((error) => {
          // The write failed...
          alert(error);
      });


  };

  function readData() {

    const starCountRef = ref(db, 'users/' + user?.email);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      setEmail(data.email);   

    });

  }

  function deleteData () {

    remove(ref(db, 'users/' + user?.email));
    alert('removed');
  }

  return (
    <View style={styles.container}>
      
      <Text>Please choose your main event(800m, 1600m or 3200m):</Text>
      <TextInput value={goalEvent} onChangeText={(goalEvent) => {setGoalEvent(goalEvent)}} placeholder="Goal Event" style={styles.textBoxes}></TextInput>
      
      <Text>What is your goal time for {goalEvent} within the next 2 weeks:</Text>
      <TextInput value={goalTime} onChangeText={(goalTime) => {setGoalTime(goalTime)}} placeholder="Goal Time" style={styles.textBoxes}></TextInput>
      
      <Text>What is the date of your last/most important race this season(MM/DD/YYYY format):</Text>
      <TextInput value={goalDate} onChangeText={(goalDate) => {setGoalDate(goalDate)}} placeholder="Goal Date(MM/DD/YYYY)" style={styles.textBoxes}></TextInput>

      <Text>Please choose a training program:</Text>
      <TextInput value={trainingType} onChangeText={(trainingType) => {setTrainingType(trainingType)}} placeholder="Speed, Strength, or Specialist" style={styles.textBoxes}></TextInput>
       
      <Button title="Submit Data" buttonStyle={styles.control} onPress={createData} />
      
      <Button
          title="Continue Survey"
          onPress={() => navigation.navigate('Survey2')}
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