import React  from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Button } from 'react-native-elements';
import { ref, set, update, onValue, remove } from "firebase/database";
import { db } from '../config/firebase'; 
import { getAuth, signOut } from 'firebase/auth';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { useState, useEffect } from 'react';

const auth = getAuth();

export default function Calendar() {
  const { user } = useAuthentication();  
  const [athleteType, setAthleteType] = useState('');
  const [goalEvent, setGoalEvent] = useState('');
  const [goalTime, setGoalTime] = useState('');
  const [goalDate, setGoalDate] = useState('');
  const [longRun, setLongRun] = useState('');
  const [doubles, setDoubles] = useState('');
  const [mileage, setMileage] = useState('');
  const [health, setHealth] = useState('');
  const [trainingDistance1, setDistance1] = useState('');
  const [trainingDistance2, setDistance2] = useState('');
  const [trainingDistance3, setDistance3] = useState('');
  const [trainingDistance4, setDistance4] = useState('');
  const [time1, setTime1] = useState('');
  const [time2, setTime2] = useState('');
  const [time3, setTime3] = useState('');
  const [time4, setTime4] = useState('');
  
  //var longMileage = '';
  const [day1Mileage, setDay1] = useState('');
  const [day2Mileage, setDay2] = useState('');
  const [day3Mileage, setDay3] = useState('');
  const [day4Mileage, setDay4] = useState('');
  const [day5Mileage, setDay5] = useState('');
  const [day6Mileage, setDay6] = useState('');
  const [day7Mileage, setDay7] = useState('');
  const [day8Mileage, setDay8] = useState('');
  const [day9Mileage, setDay9] = useState('');
  const [day10Mileage, setDay10] = useState('');
  const [day11Mileage, setDay11] = useState('');
  const [day12Mileage, setDay12] = useState('');
  const [day13Mileage, setDay13] = useState('');
  const [day14Mileage, setDay14] = useState('');
  function readData() {
    //var date = new Date().get();
    //console.log(date)
    console.log(user?.email);
    const username = user?.email.split('@')[0];
    const starCountRef = ref(db, 'users/' + username);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      setGoalDate(Date.parse(data.goalDate));
      var date = new Date().getTime();
      var daysLeft = Math.ceil((Date.parse(data.goalDate) - date)/(1000*60*60*24))
      console.log("Days Left:" + daysLeft)
      setAthleteType(data.athleteType);
      var random = Math.floor(Math.random() * 100)
      if (data.athleteType ==  "400m/800m" || data.athleteType == "800m specialist") {
        if (daysLeft <= 14) {
            eightTaper(daysLeft);
        }
        else {
            eightNorm();
        }
      }
      else if (athleteType ==  "800m/1600m" || athleteType == "1600m specialist") {
        if (daysLeft <= 14) {
            mileTaper();
        }
        else if (random >= 60) {
            mileThreeWO();
        }
        else {
            mileTwoWO();
        }
        //setLongMileage(Math.floor(parseInt(data.mileage, 10) * 0.22));
      } 
      //3200m runners
      else {
        if (daysLeft <= 14) {
            twoMileTaper();
        }
        else if (random >= 80) {
            twoMileThreeWO();
        }
        else {
            twoMileTwoWO();
        }
        //setLongMileage(Math.floor(parseInt(data.mileage, 10) * 0.12));
      }

      setGoalEvent(data.goalEvent);
      setGoalTime(data.goalTime);
      setLongRun(data.longRun);
      setDoubles(data.doubles);
      setMileage(data.mileage);
      setHealth(data.health);
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
  function eightTaper(daysLeft) {
    const username = user?.email.split('@')[0];
    const starCountRef = ref(db, 'users/' + username);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        for (let i=0; i<daysLeft; i++) {
            if (i == 0) {
                //raceDay
                setDay1(Math.floor(parseInt(data.mileage, 10) * 0.15));
            }
            else if (i == 7) {
                // race Simulation
                setDay8(Math.floor(parseInt(data.mileage, 10) * 0.15));
            }
            else if (i == 1 || i == 8) {
                // premeet workout
                setDay2(Math.floor(parseInt(data.mileage, 10) * 0.1));
                setDay9(Math.floor(parseInt(data.mileage, 10) * 0.1));
            }
            else if (i == 2 || i == 9) {
                // tuneup
                setDay3(Math.floor(parseInt(data.mileage, 10) * 0.15));
                setDay10(Math.floor(parseInt(data.mileage, 10) * 0.15));
            }
            else if (i == 3 || i == 6 || i == 10 || i == 13) {
                // recovery
                setDay4(Math.floor(parseInt(data.mileage, 10) * 0.15));
                setDay7(Math.floor(parseInt(data.mileage, 10) * 0.15));
                setDay11(Math.floor(parseInt(data.mileage, 10) * 0.15));
                setDay14(Math.floor(parseInt(data.mileage, 10) * 0.15));
            }
            else if (i == 4 || i == 11) {
                // hard workout
                setDay5(Math.floor(parseInt(data.mileage, 10) * 0.2));
                setDay12(Math.floor(parseInt(data.mileage, 10) * 0.2));
            } 
            else if (i == 5 || i == 12) {
                // easy + short speed
                setDay6(Math.floor(parseInt(data.mileage, 10) * 0.1));
                setDay13(Math.floor(parseInt(data.mileage, 10) * 0.1));
            }
        }
    });
  }
  /*
  function setLongMileage(mileage, longRun) {
    if ((mileage * 0.22) >= longRun) {
        longMileage = longRun;
    }
    else {
        longMileage = mileage * 0.22;
    }
  }
  */
    return (
      <View style={styles.container}>
        <Text>Your Workout Schedule!</Text>


        <Text>Athlete Type:</Text>
        <TextInput 
          placeholder='Athlete Type'
          value={athleteType} 
          onChangeText={(athleteType) => {setAthleteType(athleteType)}}
        />

        <Text>Health %:</Text>
        <TextInput 
          placeholder='Health %'
          value={health} 
          onChangeText={(health) => {setHealth(health)}}
        />

        <Text>Mileage:</Text>
        <TextInput 
          placeholder='Mileage'
          value={mileage} 
          onChangeText={(mileage) => {setMileage(mileage)}}
        />

        <Text>Long Run:</Text>
        <TextInput 
          placeholder='Long Run'
          value={longRun} 
          onChangeText={(longRun) => {setLongRun(longRun)}}
        />
        <Text>{"\n"}</Text>

        <Text>Weekly Schedule:</Text>
        <TextInput 
          placeholder='Day 1:'
          value={day1Mileage} 
          onChangeText={(mileage) => {setDay1(mileage)}}
        />
        <TextInput 
          placeholder='Day 2:'
          value={day2Mileage} 
          onChangeText={(mileage) => {setDay2(mileage)}}
        />
        <TextInput 
          placeholder='Day 3:'
          value={day3Mileage} 
          onChangeText={(mileage) => {setDay3(mileage)}}
        />
        <TextInput 
          placeholder='Day 4:'
          value={day4Mileage} 
          onChangeText={(mileage) => {setDay4(mileage)}}
        />
        <TextInput 
          placeholder='Day 5:'
          value={day5Mileage} 
          onChangeText={(mileage) => {setDay5(mileage)}}
        />
        <TextInput 
          placeholder='Day 6:'
          value={day6Mileage} 
          onChangeText={(mileage) => {setDay6(mileage)}}
        />
        <TextInput 
          placeholder='Day 7:'
          value={day7Mileage} 
          onChangeText={(mileage) => {setDay7(mileage)}}
        />
        <Text>{"\n"}</Text>
        <TextInput 
          placeholder='Day 8:'
          value={day8Mileage} 
          onChangeText={(mileage) => {setDay8(mileage)}}
        />
        <TextInput 
          placeholder='Day 9:'
          value={day9Mileage} 
          onChangeText={(mileage) => {setDay9(mileage)}}
        />
        <TextInput 
          placeholder='Day 10:'
          value={day10Mileage} 
          onChangeText={(mileage) => {setDay10(mileage)}}
        />
        <TextInput 
          placeholder='Day 11:'
          value={day11Mileage} 
          onChangeText={(mileage) => {setDay11(mileage)}}
        />
        <TextInput 
          placeholder='Day 12:'
          value={day12Mileage} 
          onChangeText={(mileage) => {setDay12(mileage)}}
        />
        <TextInput 
          placeholder='Day 13:'
          value={day13Mileage} 
          onChangeText={(mileage) => {setDay13(mileage)}}
        />
        <TextInput 
          placeholder='Day 14:'
          value={day14Mileage} 
          onChangeText={(mileage) => {setDay14(mileage)}}
        />
        
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