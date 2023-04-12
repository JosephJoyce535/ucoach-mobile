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
  const [mileage, setMileage] = useState('');
  const [trainingDistance1, setDistance1] = useState('');
  const [trainingDistance2, setDistance2] = useState('');
  const [trainingDistance3, setDistance3] = useState('');
  const [trainingDistance4, setDistance4] = useState('');
  const [time1, setTime1] = useState('');
  const [time2, setTime2] = useState('');
  const [time3, setTime3] = useState('');
  const [time4, setTime4] = useState('');
  
  const [day1Mileage, setDay1] = useState('');
  const [day1Type, setDay1Type] = useState('');
  const [day1Date, setDay1Date] = useState('');
  const [day2Mileage, setDay2] = useState('');
  const [day2Type, setDay2Type] = useState('');
  const [day2Date, setDay2Date] = useState('');
  const [day3Mileage, setDay3] = useState('');
  const [day3Type, setDay3Type] = useState('');
  const [day3Date, setDay3Date] = useState('');
  const [day4Mileage, setDay4] = useState('');
  const [day4Type, setDay4Type] = useState('');
  const [day4Date, setDay4Date] = useState('');
  const [day5Mileage, setDay5] = useState('');
  const [day5Type, setDay5Type] = useState('');
  const [day5Date, setDay5Date] = useState('');
  const [day6Mileage, setDay6] = useState('');
  const [day6Type, setDay6Type] = useState('');
  const [day6Date, setDay6Date] = useState('');
  const [day7Mileage, setDay7] = useState('');
  const [day7Type, setDay7Type] = useState('');
  const [day7Date, setDay7Date] = useState('');
  
  const [day8Mileage, setDay8] = useState('');
  const [day8Type, setDay8Type] = useState('');
  const [day8Date, setDay8Date] = useState('');
  const [day9Mileage, setDay9] = useState('');
  const [day9Type, setDay9Type] = useState('');
  const [day9Date, setDay9Date] = useState('');
  const [day10Mileage, setDay10] = useState('');
  const [day10Type, setDay10Type] = useState('');
  const [day10Date, setDay10Date] = useState('');
  const [day11Mileage, setDay11] = useState('');
  const [day11Type, setDay11Type] = useState('');
  const [day11Date, setDay11Date] = useState('');
  const [day12Mileage, setDay12] = useState('');
  const [day12Type, setDay12Type] = useState('');
  const [day12Date, setDay12Date] = useState('');
  const [day13Mileage, setDay13] = useState('');
  const [day13Type, setDay13Type] = useState('');
  const [day13Date, setDay13Date] = useState('');
  const [day14Mileage, setDay14] = useState('');
  const [day14Type, setDay14Type] = useState('');
  const [day14Date, setDay14Date] = useState('');
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
      if (daysLeft <= 14) {
        for (let i=0; i<=daysLeft; i++) {
            let subTime = (1000*60*60*24) * i;
            const event = new Date(Date.parse(data.goalDate) - subTime)
            if ((i % 14) == 0) setDay14Date(dateClean(event))
            if ((i % 14) == 1) setDay13Date(dateClean(event))
            if ((i % 14) == 2) setDay12Date(dateClean(event))
            if ((i % 14) == 3) setDay11Date(dateClean(event))
            if ((i % 14) == 4) setDay10Date(dateClean(event))
            if ((i % 14) == 5) setDay9Date(dateClean(event))
            if ((i % 14) == 6) setDay8Date(dateClean(event))
            if ((i % 14) == 7) setDay7Date(dateClean(event))
            if ((i % 14) == 8) setDay6Date(dateClean(event))
            if ((i % 14) == 9) setDay5Date(dateClean(event))
            if ((i % 14) == 10) setDay4Date(dateClean(event))
            if ((i % 14) == 11) setDay3Date(dateClean(event))
            if ((i % 14) == 12) setDay2Date(dateClean(event))
            if ((i % 14) == 13) setDay1Date(dateClean(event))
        }
      }
      else {
        for (let i=0; i<=13; i++) {
            let subTime = (1000*60*60*24) * i;
            //const event = new Date();
            var date = new Date().getTime() + subTime;
            //console.log("Date: " + date)
            const event = new Date(date)
            if (i == 13) setDay14Date(dateClean(event))
            if (i == 12) setDay13Date(dateClean(event))
            if (i == 11) setDay12Date(dateClean(event))
            if (i == 10) setDay11Date(dateClean(event))
            if (i == 9) setDay10Date(dateClean(event))
            if (i == 8) setDay9Date(dateClean(event))
            if (i == 7) setDay8Date(dateClean(event))
            if (i == 6) setDay7Date(dateClean(event))
            if (i == 5) setDay6Date(dateClean(event))
            if (i == 4) setDay5Date(dateClean(event))
            if (i == 3) setDay4Date(dateClean(event))
            if (i == 2) setDay3Date(dateClean(event))
            if (i == 1) setDay2Date(dateClean(event))
            if (i == 0) setDay1Date(dateClean(event))
        }
      }
        setDay1("Already");
        setDay1Type("Completed")
        setDay2("Already");
        setDay2Type("Completed")
        setDay3("Already");
        setDay3Type("Completed")
        setDay4("Already");
        setDay4Type("Completed")
        setDay5("Already");
        setDay5Type("Completed")
        setDay6("Already");
        setDay6Type("Completed")
        setDay7("Already");
        setDay7Type("Completed")
        setDay8("Already");
        setDay8Type("Completed")
        setDay9("Already");
        setDay9Type("Completed")
        setDay10("Already");
        setDay10Type("Completed")
        setDay11("Already");
        setDay11Type("Completed")
        setDay12("Already");
        setDay12Type("Completed")
        setDay13("Already");
        setDay13Type("Completed")
        setDay14("Already");
        setDay14Type("Completed")
      
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
            mileTaper(daysLeft);
        }
        else if (random >= 20) {
            //one week of 3, one of 2 so still only doing 3 a week 40% of time
            // 0.5 * 80 = 40
            mileThreeWO();
        }
        else {
            mileTwoWO();
        }
      } 
      //3200m runners
      else {
        if (daysLeft <= 14) {
            twoMileTaper(daysLeft);
        }
        else if (random >= 60) {
            //one week of 3, one of 2 so still only doing 3 a week 20% of time
            // 0.5 * 40 = 20
            twoMileThreeWO();
        }
        else {
            twoMileTwoWO();
        }
      }

      setGoalEvent(data.goalEvent);
      setGoalTime(data.goalTime);
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
  function dateClean(event) {
    let day = event.getDate();
    let month = event.getMonth();
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let year = event.getFullYear();
    let currentDate = `${months[month]}-${day}-${year}`;
    return currentDate;
  }
  function eightTaper(daysLeft) {
    const username = user?.email.split('@')[0];
    const starCountRef = ref(db, 'users/' + username);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        for (let i=daysLeft; i>=0; i--) {
            if (i == 0) {
                setDay14((Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.7)) + " miles");
                setDay14Type("Race Day!")
            }
            else if (i == 1) {
                setDay13((Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.7)) + " miles");
                setDay13Type("Premeet Workout")
            }
            else if (i == 2 ) {
                setDay12((Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.7)) + " miles");
                setDay12Type("Tuneup Workout")
            }
            else if (i == 3) {
                setDay11((Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.7)) + " miles");
                setDay11Type("Recovery Run")
            }
            else if (i == 4) {
                setDay10((Math.floor(parseInt(data.mileage, 10) * 0.2 * 0.7)) + " miles");
                setDay10Type("Hard Workout")
            }
            else if (i == 5) {
                setDay9((Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.7)) + " miles");
                setDay9Type("Easy Run + Short Speed")
            }
            else if (i == 6) {
                setDay8((Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.7)) + " miles");
                setDay8Type("Recovery Run")
            }
            else if (i == 7) {
                setDay7((Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.8)) + " miles");
                setDay7Type("Race Simulation Workout")
            }
            else if (i == 8) {
                setDay6((Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.8)) + " miles");
                setDay6Type("Premeet Workout")
            }
            else if (i == 9) {
                setDay5((Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.8)) + " miles");
                setDay5Type("Tuneup Workout")
            }
            else if (i == 10) {
                setDay4((Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.8)) + " miles");
                setDay4Type("Recovery Run")
            }
            else if (i == 11) {
                setDay3((Math.floor(parseInt(data.mileage, 10) * 0.2 * 0.8)) + " miles");
                setDay3Type("Hard Workout")
            } 
            else if (i == 12) {
                setDay2((Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.8)) + " miles");
                setDay2Type("Easy Run + Short Speed")
            }
            else if (i == 13) {
                setDay1((Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.8)) + " miles");
                setDay1Type("Recovery Run")
            }
        }
    });
  }
  function mileTaper(daysLeft) {
    const username = user?.email.split('@')[0];
    const starCountRef = ref(db, 'users/' + username);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        for (let i=daysLeft; i>=0; i--) {
            if (i == 0) {
                setDay14((Math.floor(parseInt(data.mileage, 10) * 0.12 * 0.75)) + " miles");
                setDay14Type("Race Day!")
            }
            else if (i == 1) {
                setDay13((Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.75)) + " miles");
                setDay13Type("Premeet Workout")
            }
            else if (i == 2 ) {
                setDay12((Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.75)) + " miles");
                setDay12Type("Tuneup Workout")
            }
            else if (i == 3) {
                setDay11((Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.75)) + " miles");
                setDay11Type("Recovery Run")
            }
            else if (i == 4) {
                setDay10((Math.floor(parseInt(data.mileage, 10) * 0.18 * 0.75)) + " miles");
                setDay10Type("Hard Workout")
            }
            else if (i == 5) {
                setDay9((Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.75)) + " miles");
                setDay9Type("Easy Run + Short Speed")
            }
            else if (i == 6) {
                setDay8((Math.floor(parseInt(data.mileage, 10) * 0.20 * 0.75)) + " miles");
                setDay8Type("Easy Long Run")
            }
            else if (i == 7) {
                setDay7((Math.floor(parseInt(data.mileage, 10) * 0.12 * 0.85)) + " miles");
                setDay7Type("Race Simulation Workout")
            }
            else if (i == 8) {
                setDay6((Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.85)) + " miles");
                setDay6Type("Premeet Workout")
            }
            else if (i == 9) {
                setDay5((Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.85)) + " miles");
                setDay5Type("Tuneup Workout")
            }
            else if (i == 10) {
                setDay4((Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.85)) + " miles");
                setDay4Type("Recovery Run")
            }
            else if (i == 11) {
                setDay3((Math.floor(parseInt(data.mileage, 10) * 0.18 * 0.85)) + " miles");
                setDay3Type("Hard Workout")
            } 
            else if (i == 12) {
                setDay2((Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.85)) + " miles");
                setDay2Type("Easy Run + Short Speed")
            }
            else if (i == 13) {
                setDay1((Math.floor(parseInt(data.mileage, 10) * 0.20 * 0.85)) + " miles");
                setDay1Type("Long Run")
            }
        }
    });
  }
  function twoMileTaper(daysLeft) {
    const username = user?.email.split('@')[0];
    const starCountRef = ref(db, 'users/' + username);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        for (let i=daysLeft; i>=0; i--) {
            if (i == 0) {
                setDay14((Math.floor(parseInt(data.mileage, 10) * 0.12 * 0.8)) + " miles");
                setDay14Type("Race Day!")
            }
            else if (i == 1) {
                setDay13((Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.8)) + " miles");
                setDay13Type("Premeet Workout")
            }
            else if (i == 2 ) {
                setDay12((Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.8)) + " miles");
                setDay12Type("Tuneup Workout")
            }
            else if (i == 3) {
                setDay11((Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.8)) + " miles");
                setDay11Type("Recovery Run")
            }
            else if (i == 4) {
                setDay10((Math.floor(parseInt(data.mileage, 10) * 0.18 * 0.8)) + " miles");
                setDay10Type("Hard Workout")
            }
            else if (i == 5) {
                setDay9((Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.8)) + " miles");
                setDay9Type("Easy Run + Short Speed")
            }
            else if (i == 6) {
                setDay8((Math.floor(parseInt(data.mileage, 10) * 0.20 * 0.8)) + " miles");
                setDay8Type("Easy Long Run")
            }
            else if (i == 7) {
                setDay7((Math.floor(parseInt(data.mileage, 10) * 0.12 * 0.9)) + " miles");
                setDay7Type("Race Simulation Workout")
            }
            else if (i == 8) {
                setDay6((Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.9)) + " miles");
                setDay6Type("Premeet Workout")
            }
            else if (i == 9) {
                setDay5((Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.9)) + " miles");
                setDay5Type("Tuneup Workout")
            }
            else if (i == 10) {
                setDay4((Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.9)) + " miles");
                setDay4Type("Recovery Run")
            }
            else if (i == 11) {
                setDay3((Math.floor(parseInt(data.mileage, 10) * 0.18 * 0.9)) + " miles");
                setDay3Type("Hard Workout")
            } 
            else if (i == 12) {
                setDay2((Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.9)) + " miles");
                setDay2Type("Easy Run + Short Speed")
            }
            else if (i == 13) {
                setDay1((Math.floor(parseInt(data.mileage, 10) * 0.20 * 0.9)) + " miles");
                setDay1Type("Long Run")
            }
        }
    });
  }
  function eightNorm() {
    const username = user?.email.split('@')[0];
    const starCountRef = ref(db, 'users/' + username);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        for (let i=13; i>=0; i--) {
            const rndInt = (Math.floor(Math.random() * 21) + 80) * 0.01
            console.log(rndInt)
            if (i == 0) {
                setDay14((Math.ceil(parseInt(data.mileage, 10) * 0.15 * rndInt)) + " miles");
                setDay14Type("Long Race Pace Reps")
            }
            else if (i == 1) {
                setDay13((Math.ceil(parseInt(data.mileage, 10) * 0.15 * rndInt)) + " miles");
                setDay13Type("Recovery Run")
            }
            else if (i == 2 ) {
                setDay12((Math.ceil(parseInt(data.mileage, 10) * 0.1 * rndInt)) + " miles");
                setDay12Type("Speed Workout")
            }
            else if (i == 3) {
                setDay11((Math.ceil(parseInt(data.mileage, 10) * 0.15 * rndInt)) + " miles");
                setDay11Type("Recovery Run")
            }
            else if (i == 4) {
                setDay10((Math.ceil(parseInt(data.mileage, 10) * 0.2 * rndInt)) + " miles");
                setDay10Type("Threshold Workout")
            }
            else if (i == 5) {
                setDay9((Math.ceil(parseInt(data.mileage, 10) * 0.1 * rndInt)) + " miles");
                setDay9Type("Easy Run + Short Speed")
            }
            else if (i == 6) {
                setDay8((Math.ceil(parseInt(data.mileage, 10) * 0.15 * rndInt)) + " miles");
                setDay8Type("Recovery Run")
            }
            else if (i == 7) {
                setDay7((Math.ceil(parseInt(data.mileage, 10) * 0.15 * rndInt)) + " miles");
                setDay7Type("Short Race Pace Reps")
            }
            else if (i == 8) {
                setDay6((Math.ceil(parseInt(data.mileage, 10) * 0.1 * rndInt)) + " miles");
                setDay6Type("Premeet Workout")
            }
            else if (i == 9) {
                setDay5((Math.ceil(parseInt(data.mileage, 10) * 0.15 * rndInt)) + " miles");
                setDay5Type("Light Tempo + Hills or Fartlek")
            }
            else if (i == 10) {
                setDay4((Math.ceil(parseInt(data.mileage, 10) * 0.15 * rndInt)) + " miles");
                setDay4Type("Recovery Run")
            }
            else if (i == 11) {
                setDay3((Math.ceil(parseInt(data.mileage, 10) * 0.2 * rndInt)) + " miles");
                setDay3Type("V02 Max Workout")
            } 
            else if (i == 12) {
                setDay2((Math.ceil(parseInt(data.mileage, 10) * 0.1 * rndInt)) + " miles");
                setDay2Type("Easy Run + Short Speed")
            }
            else if (i == 13) {
                setDay1((Math.ceil(parseInt(data.mileage, 10) * 0.15 * rndInt)) + " miles");
                setDay1Type("Recovery Run")
            }
        }
    });
  }
  function mileThreeWO() {
    const username = user?.email.split('@')[0];
    const starCountRef = ref(db, 'users/' + username);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        for (let i=13; i>=0; i--) {
            const rndInt = (Math.floor(Math.random() * 21) + 80) * 0.01
            if (i == 0) {
                setDay14((Math.ceil(parseInt(data.mileage, 10) * 0.12 * rndInt)) + " miles");
                setDay14Type("Long Race Pace Reps")
            }
            else if (i == 1) {
                setDay13((Math.ceil(parseInt(data.mileage, 10) * 0.10 * rndInt)) + " miles");
                setDay13Type("Premeet")
            }
            else if (i == 2 ) {
                setDay12((Math.ceil(parseInt(data.mileage, 10) * 0.15 * rndInt)) + " miles");
                setDay12Type("Tuneup workout")
            }
            else if (i == 3) {
                setDay11((Math.ceil(parseInt(data.mileage, 10) * 0.15 * rndInt)) + " miles");
                setDay11Type("Recovery Run")
            }
            else if (i == 4) {
                setDay10((Math.ceil(parseInt(data.mileage, 10) * 0.18 * rndInt)) + " miles");
                setDay10Type("V02 Max workout")
            }
            else if (i == 5) {
                setDay9((Math.ceil(parseInt(data.mileage, 10) * 0.1 * rndInt)) + " miles");
                setDay9Type("Easy Run + Short Speed")
            }
            else if (i == 6) {
                setDay8((Math.ceil(parseInt(data.mileage, 10) * 0.2 * rndInt)) + " miles");
                setDay8Type("Long Run")
            }
            else if (i == 7) {
                setDay7((Math.ceil(parseInt(data.mileage, 10) * 0.12 * rndInt)) + " miles");
                setDay7Type("Easy Run")
            }
            else if (i == 8) {
                setDay6((Math.ceil(parseInt(data.mileage, 10) * 0.16 * rndInt)) + " miles");
                setDay6Type("Short Tempo + Race Pace")
            }
            else if (i == 9) {
                setDay5((Math.ceil(parseInt(data.mileage, 10) * 0.12 * rndInt)) + " miles");
                setDay5Type("Easy + strides")
            }
            else if (i == 10) {
                setDay4((Math.ceil(parseInt(data.mileage, 10) * 0.1 * rndInt)) + " miles");
                setDay4Type("Recovery Run")
            }
            else if (i == 11) {
                setDay3((Math.ceil(parseInt(data.mileage, 10) * 0.18 * rndInt)) + " miles");
                setDay3Type("Tempo + Hills/Short Reps")
            } 
            else if (i == 12) {
                setDay2((Math.ceil(parseInt(data.mileage, 10) * 0.1 * rndInt)) + " miles");
                setDay2Type("Easy Run + Short Speed")
            }
            else if (i == 13) {
                setDay1((Math.ceil(parseInt(data.mileage, 10) * 0.22 * rndInt)) + " miles");
                setDay1Type("Long Run")
            }
        }
    });
  }
  function mileTwoWO() {
    const username = user?.email.split('@')[0];
    const starCountRef = ref(db, 'users/' + username);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        for (let i=13; i>=0; i--) {
            const rndInt = (Math.floor(Math.random() * 21) + 80) * 0.01
            if (i == 0) {
                setDay14((Math.ceil(parseInt(data.mileage, 10) * 0.12 * rndInt)) + " miles");
                setDay14Type("Easy Run")
            }
            else if (i == 1) {
                setDay13((Math.ceil(parseInt(data.mileage, 10) * 0.16 * rndInt)) + " miles");
                setDay13Type("Short Tempo + Race Pace")
            }
            else if (i == 2 ) {
                setDay12((Math.ceil(parseInt(data.mileage, 10) * 0.12 * rndInt)) + " miles");
                setDay12Type("Easy + strides")
            }
            else if (i == 3) {
                setDay11((Math.ceil(parseInt(data.mileage, 10) * 0.1 * rndInt)) + " miles");
                setDay11Type("Recovery Run")
            }
            else if (i == 4) {
                setDay10((Math.ceil(parseInt(data.mileage, 10) * 0.18 * rndInt)) + " miles");
                setDay10Type("Tempo + Hills/Short Reps")
            }
            else if (i == 5) {
                setDay9((Math.ceil(parseInt(data.mileage, 10) * 0.1 * rndInt)) + " miles");
                setDay9Type("Easy Run + Short Speed")
            }
            else if (i == 6) {
                setDay8((Math.ceil(parseInt(data.mileage, 10) * 0.22 * rndInt)) + " miles");
                setDay8Type("Long Run")
            }
            else if (i == 7) {
                setDay7((Math.ceil(parseInt(data.mileage, 10) * 0.12 * rndInt)) + " miles");
                setDay7Type("Easy Run")
            }
            else if (i == 8) {
                setDay6((Math.ceil(parseInt(data.mileage, 10) * 0.16 * rndInt)) + " miles");
                setDay6Type("Short Tempo + Race Pace")
            }
            else if (i == 9) {
                setDay5((Math.ceil(parseInt(data.mileage, 10) * 0.12 * rndInt)) + " miles");
                setDay5Type("Easy + strides")
            }
            else if (i == 10) {
                setDay4((Math.ceil(parseInt(data.mileage, 10) * 0.1 * rndInt)) + " miles");
                setDay4Type("Recovery Run")
            }
            else if (i == 11) {
                setDay3((Math.ceil(parseInt(data.mileage, 10) * 0.18 * rndInt)) + " miles");
                setDay3Type("Tempo + Hills/Short Reps")
            } 
            else if (i == 12) {
                setDay2((Math.ceil(parseInt(data.mileage, 10) * 0.1 * rndInt)) + " miles");
                setDay2Type("Easy Run + Short Speed")
            }
            else if (i == 13) {
                setDay1((Math.ceil(parseInt(data.mileage, 10) * 0.22 * rndInt)) + " miles");
                setDay1Type("Long Run")
            }
        }
    });
  }
  function twoMileThreeWO() {
    const username = user?.email.split('@')[0];
    const starCountRef = ref(db, 'users/' + username);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        for (let i=13; i>=0; i--) {
            const rndInt = (Math.floor(Math.random() * 21) + 80) * 0.01
            if (i == 0) {
                setDay14((Math.ceil(parseInt(data.mileage, 10) * 0.12 * rndInt)) + " miles");
                setDay14Type("Long Race Pace Reps")
            }
            else if (i == 1) {
                setDay13((Math.ceil(parseInt(data.mileage, 10) * 0.10 * rndInt)) + " miles");
                setDay13Type("Premeet")
            }
            else if (i == 2 ) {
                setDay12((Math.ceil(parseInt(data.mileage, 10) * 0.15 * rndInt)) + " miles");
                setDay12Type("Tuneup workout")
            }
            else if (i == 3) {
                setDay11((Math.ceil(parseInt(data.mileage, 10) * 0.15 * rndInt)) + " miles");
                setDay11Type("Recovery Run")
            }
            else if (i == 4) {
                setDay10((Math.ceil(parseInt(data.mileage, 10) * 0.18 * rndInt)) + " miles");
                setDay10Type("V02 Max workout")
            }
            else if (i == 5) {
                setDay9((Math.ceil(parseInt(data.mileage, 10) * 0.1 * rndInt)) + " miles");
                setDay9Type("Easy Run + Short Speed")
            }
            else if (i == 6) {
                setDay8((Math.ceil(parseInt(data.mileage, 10) * 0.2 * rndInt)) + " miles");
                setDay8Type("Long Run")
            }
            else if (i == 7) {
                setDay7((Math.ceil(parseInt(data.mileage, 10) * 0.12 * rndInt)) + " miles");
                setDay7Type("Easy Run")
            }
            else if (i == 8) {
                setDay6((Math.ceil(parseInt(data.mileage, 10) * 0.16 * rndInt)) + " miles");
                setDay6Type("Short Tempo + Race Pace")
            }
            else if (i == 9) {
                setDay5((Math.ceil(parseInt(data.mileage, 10) * 0.12 * rndInt)) + " miles");
                setDay5Type("Easy + strides")
            }
            else if (i == 10) {
                setDay4((Math.ceil(parseInt(data.mileage, 10) * 0.1 * rndInt)) + " miles");
                setDay4Type("Recovery Run")
            }
            else if (i == 11) {
                setDay3((Math.ceil(parseInt(data.mileage, 10) * 0.18 * rndInt)) + " miles");
                setDay3Type("Tempo + Hills/Short Reps")
            } 
            else if (i == 12) {
                setDay2((Math.ceil(parseInt(data.mileage, 10) * 0.1 * rndInt)) + " miles");
                setDay2Type("Easy Run + Short Speed")
            }
            else if (i == 13) {
                setDay1((Math.ceil(parseInt(data.mileage, 10) * 0.22 * rndInt)) + " miles");
                setDay1Type("Long Run")
            }
        }
    });
  }
  function twoMileTwoWO() {
    const username = user?.email.split('@')[0];
    const starCountRef = ref(db, 'users/' + username);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        for (let i=13; i>=0; i--) {
            const rndInt = (Math.floor(Math.random() * 21) + 80) * 0.01
            if (i == 0) {
                setDay14((Math.ceil(parseInt(data.mileage, 10) * 0.12 * rndInt)) + " miles");
                setDay14Type("Easy Run")
            }
            else if (i == 1) {
                setDay13((Math.ceil(parseInt(data.mileage, 10) * 0.16 * rndInt)) + " miles");
                setDay13Type("Short Tempo + Race Pace")
            }
            else if (i == 2 ) {
                setDay12((Math.ceil(parseInt(data.mileage, 10) * 0.12 * rndInt)) + " miles");
                setDay12Type("Easy + strides")
            }
            else if (i == 3) {
                setDay11((Math.ceil(parseInt(data.mileage, 10) * 0.1 * rndInt)) + " miles");
                setDay11Type("Recovery Run")
            }
            else if (i == 4) {
                setDay10((Math.ceil(parseInt(data.mileage, 10) * 0.18 * rndInt)) + " miles");
                setDay10Type("Tempo + Hills/Short Reps")
            }
            else if (i == 5) {
                setDay9((Math.ceil(parseInt(data.mileage, 10) * 0.1 * rndInt)) + " miles");
                setDay9Type("Easy Run + Short Speed")
            }
            else if (i == 6) {
                setDay8((Math.ceil(parseInt(data.mileage, 10) * 0.22 * rndInt)) + " miles");
                setDay8Type("Long Run")
            }
            else if (i == 7) {
                setDay7((Math.ceil(parseInt(data.mileage, 10) * 0.12 * rndInt)) + " miles");
                setDay7Type("Easy Run")
            }
            else if (i == 8) {
                setDay6((Math.ceil(parseInt(data.mileage, 10) * 0.16 * rndInt)) + " miles");
                setDay6Type("Short Tempo + Race Pace")
            }
            else if (i == 9) {
                setDay5((Math.ceil(parseInt(data.mileage, 10) * 0.12 * rndInt)) + " miles");
                setDay5Type("Easy + strides")
            }
            else if (i == 10) {
                setDay4((Math.ceil(parseInt(data.mileage, 10) * 0.1 * rndInt)) + " miles");
                setDay4Type("Recovery Run")
            }
            else if (i == 11) {
                setDay3((Math.ceil(parseInt(data.mileage, 10) * 0.18 * rndInt)) + " miles");
                setDay3Type("Tempo + Hills/Short Reps")
            } 
            else if (i == 12) {
                setDay2((Math.ceil(parseInt(data.mileage, 10) * 0.1 * rndInt)) + " miles");
                setDay2Type("Easy Run + Short Speed")
            }
            else if (i == 13) {
                setDay1((Math.ceil(parseInt(data.mileage, 10) * 0.22 * rndInt)) + " miles");
                setDay1Type("Long Run")
            }
        }
    });
  }
  
    return (
        <View>
        <View style={styles.row}>
            <View style={styles.container}>
                <TextInput 
                placeholder='Day 1:'
                value={day1Date} 
                onChangeText={(date) => {setDay1Date(date)}}
                />
                <TextInput 
                placeholder='Mileage'
                value={day1Mileage} 
                onChangeText={(mileage) => {setDay1(mileage)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder='Type'
                value={day1Type} 
                onChangeText={(type) => {setDay1Type(type)}}
                />
            </View>

            <View style={styles.container}>
                <TextInput 
                placeholder='Day 2:'
                value={day2Date} 
                onChangeText={(date) => {setDay2Date(date)}}
                />
                <TextInput 
                placeholder='Mileage'
                value={day2Mileage} 
                onChangeText={(mileage) => {setDay2(mileage)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder='Type'
                value={day2Type} 
                onChangeText={(type) => {setDay2Type(type)}}
                />
            </View>

            <View style={styles.container}>
                <TextInput 
                placeholder='Day 3:'
                value={day3Date} 
                onChangeText={(date) => {setDay3Date(date)}}
                />
                <TextInput 
                placeholder='Mileage'
                value={day3Mileage} 
                onChangeText={(mileage) => {setDay3(mileage)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder='Type'
                value={day3Type} 
                onChangeText={(type) => {setDay3Type(type)}}
                />
            </View>

            <View style={styles.container}>
                <TextInput 
                placeholder='Day 4:'
                value={day4Date} 
                onChangeText={(date) => {setDay4Date(date)}}
                />
                <TextInput 
                placeholder='Mileage'
                value={day4Mileage} 
                onChangeText={(mileage) => {setDay4(mileage)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder='Type'
                value={day4Type} 
                onChangeText={(type) => {setDay4Type(type)}}
                />
            </View>

            <View style={styles.container}>
                <TextInput 
                placeholder='Day 5:'
                value={day5Date} 
                onChangeText={(date) => {setDay5Date(date)}}
                />
                <TextInput 
                placeholder='Mileage'
                value={day5Mileage} 
                onChangeText={(mileage) => {setDay5(mileage)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder='Type'
                value={day5Type} 
                onChangeText={(type) => {setDay5Type(type)}}
                />
            </View>

            <View style={styles.container}>
                <TextInput 
                placeholder='Day 6:'
                value={day6Date} 
                onChangeText={(date) => {setDay6Date(date)}}
                />
                <TextInput 
                placeholder='Mileage'
                value={day6Mileage} 
                onChangeText={(mileage) => {setDay6(mileage)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder='Type'
                value={day6Type} 
                onChangeText={(type) => {setDay6Type(type)}}
                />
            </View>

            <View style={styles.container}>
                <TextInput 
                placeholder='Day 7:'
                value={day7Date} 
                onChangeText={(date) => {setDay7Date(date)}}
                />
                <TextInput 
                placeholder='Mileage'
                value={day7Mileage} 
                onChangeText={(mileage) => {setDay7(mileage)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder='Type'
                value={day7Type} 
                onChangeText={(type) => {setDay7Type(type)}}
                />
            </View>
        </View>
        <View style={styles.row}>
            
            <View style={styles.container}>
                <TextInput 
                placeholder='Day 8:'
                value={day8Date} 
                onChangeText={(date) => {setDay8Date(date)}}
                />
                <TextInput 
                placeholder='Mileage'
                value={day8Mileage} 
                onChangeText={(mileage) => {setDay8(mileage)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder='Type'
                value={day8Type} 
                onChangeText={(type) => {setDay8Type(type)}}
                />
            </View>

            <View style={styles.container}>
                <TextInput 
                placeholder='Day 9:'
                value={day9Date} 
                onChangeText={(date) => {setDay9Date(date)}}
                />
                <TextInput 
                placeholder='Mileage'
                value={day9Mileage} 
                onChangeText={(mileage) => {setDay9(mileage)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder='Type'
                value={day9Type} 
                onChangeText={(type) => {setDay9Type(type)}}
                />
            </View>

            <View style={styles.container}>
                <TextInput 
                placeholder='Day 10:'
                value={day10Date} 
                onChangeText={(date) => {setDay10Date(date)}}
                />
                <TextInput 
                placeholder='Mileage'
                value={day10Mileage} 
                onChangeText={(mileage) => {setDay10(mileage)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder='Type'
                value={day10Type} 
                onChangeText={(type) => {setDay10Type(type)}}
                />
            </View>

            <View style={styles.container}>
                <TextInput 
                placeholder='Day 11:'
                value={day11Date} 
                onChangeText={(date) => {setDay11Date(date)}}
                />
                <TextInput 
                placeholder='Mileage'
                value={day11Mileage} 
                onChangeText={(mileage) => {setDay11(mileage)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder='Type'
                value={day11Type} 
                onChangeText={(type) => {setDay11Type(type)}}
                />
            </View>

            <View style={styles.container}>
                <TextInput 
                placeholder='Day 12:'
                value={day12Date} 
                onChangeText={(date) => {setDay12Date(date)}}
                />
                <TextInput 
                placeholder='Mileage'
                value={day12Mileage} 
                onChangeText={(mileage) => {setDay12(mileage)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder='Type'
                value={day12Type} 
                onChangeText={(type) => {setDay12Type(type)}}
                />
            </View>

            <View style={styles.container}>
                <TextInput 
                placeholder='Day 13:'
                value={day13Date} 
                onChangeText={(date) => {setDay13Date(date)}}
                />
                <TextInput 
                placeholder='Mileage'
                value={day13Mileage} 
                onChangeText={(mileage) => {setDay13(mileage)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder='Type'
                value={day13Type} 
                onChangeText={(type) => {setDay13Type(type)}}
                />
            </View>

            <View style={styles.container}>
                <TextInput 
                placeholder='Day 14:'
                value={day14Date} 
                onChangeText={(date) => {setDay14Date(date)}}
                />
                <TextInput 
                placeholder='Mileage'
                value={day14Mileage} 
                onChangeText={(mileage) => {setDay14(mileage)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder='Type'
                value={day14Type} 
                onChangeText={(type) => {setDay14Type(type)}}
                />
            </View>
            
        </View>
        <Button title="Show Data" buttonStyle={styles.control} onPress={readData} />
    </View>
    );
}

const styles = StyleSheet.create({
  row: {
        flexDirection: "row",
  },
  inputWrap: {
        flex: 1,
        borderColor: "#cccccc",
        borderBottomWidth: 1,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
  },
  container: {  
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

  contol: {
    marginTop: 10,
    flex: 1
  },

  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  }
});