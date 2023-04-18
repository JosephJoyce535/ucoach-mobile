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
  const [day1Extra, setDay1Extra] = useState('');
  const [day1ExtraM, setDay1ExtraM] = useState('');

  const [day2Mileage, setDay2] = useState('');
  const [day2Type, setDay2Type] = useState('');
  const [day2Date, setDay2Date] = useState('');
  const [day2Extra, setDay2Extra] = useState('');
  const [day2ExtraM, setDay2ExtraM] = useState('');

  const [day3Mileage, setDay3] = useState('');
  const [day3Type, setDay3Type] = useState('');
  const [day3Date, setDay3Date] = useState('');
  const [day3Extra, setDay3Extra] = useState('');
  const [day3ExtraM, setDay3ExtraM] = useState('');
  const [day3Extra3, setDay3Extra3] = useState('')

  const [day4Mileage, setDay4] = useState('');
  const [day4Type, setDay4Type] = useState('');
  const [day4Date, setDay4Date] = useState('');
  const [day4Extra, setDay4Extra] = useState('');
  const [day4ExtraM, setDay4ExtraM] = useState('');

  const [day5Mileage, setDay5] = useState('');
  const [day5Type, setDay5Type] = useState('');
  const [day5Date, setDay5Date] = useState('');
  const [day5Extra, setDay5Extra] = useState('');
  const [day5ExtraM, setDay5ExtraM] = useState('');

  const [day6Mileage, setDay6] = useState('');
  const [day6Type, setDay6Type] = useState('');
  const [day6Date, setDay6Date] = useState('');
  const [day6Extra, setDay6Extra] = useState('');
  const [day6ExtraM, setDay6ExtraM] = useState('');

  const [day7Mileage, setDay7] = useState('');
  const [day7Type, setDay7Type] = useState('');
  const [day7Date, setDay7Date] = useState('');
  const [day7Extra, setDay7Extra] = useState('');
  const [day7ExtraM, setDay7ExtraM] = useState('');

  const [day8Mileage, setDay8] = useState('');
  const [day8Type, setDay8Type] = useState('');
  const [day8Date, setDay8Date] = useState('');
  const [day8Extra, setDay8Extra] = useState('');
  const [day8ExtraM, setDay8ExtraM] = useState('');

  const [day9Mileage, setDay9] = useState('');
  const [day9Type, setDay9Type] = useState('');
  const [day9Date, setDay9Date] = useState('');
  const [day9Extra, setDay9Extra] = useState('');
  const [day9ExtraM, setDay9ExtraM] = useState('');

  const [day10Mileage, setDay10] = useState('');
  const [day10Type, setDay10Type] = useState('');
  const [day10Date, setDay10Date] = useState('');
  const [day10Extra, setDay10Extra] = useState('');
  const [day10ExtraM, setDay10ExtraM] = useState('');
  
  const [day11Mileage, setDay11] = useState('');
  const [day11Type, setDay11Type] = useState('');
  const [day11Date, setDay11Date] = useState('');
  const [day11Extra, setDay11Extra] = useState('');
  const [day11ExtraM, setDay11ExtraM] = useState('');
  
  const [day12Mileage, setDay12] = useState('');
  const [day12Type, setDay12Type] = useState('');
  const [day12Date, setDay12Date] = useState('');
  const [day12Extra, setDay12Extra] = useState('');
  const [day12ExtraM, setDay12ExtraM] = useState('');
  
  const [day13Mileage, setDay13] = useState('');
  const [day13Type, setDay13Type] = useState('');
  const [day13Date, setDay13Date] = useState('');
  const [day13Extra, setDay13Extra] = useState('');
  const [day13ExtraM, setDay13ExtraM] = useState('');
  
  const [day14Mileage, setDay14] = useState('');
  const [day14Type, setDay14Type] = useState('');
  const [day14Date, setDay14Date] = useState('');
  const [day14Extra, setDay14Extra] = useState('');
  const [day14ExtraM, setDay14ExtraM] = useState('');

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
  function time2Seconds(time) {
    if (time.length <= 2) {
        return time
    }
    else {
        let timeArray = time.split(":")
        let mins = parseInt(timeArray[0])
        console.log(mins)
        let seconds = parseInt(timeArray[1])
        console.log(seconds)
        return (60 * mins) + seconds
    }
  }
  function time2MinsSecs(time) {
    if (time <= 90)
        return time
    else {
        let mins = Math.floor(time / 60)
        let secs = time - (60 * mins)
        if (secs >= 10)
            return `${mins}:${secs}`
        else
            return `${mins}:0${secs}`
    }
  }
  function eightTaper(daysLeft) {
    const username = user?.email.split('@')[0];
    const starCountRef = ref(db, 'users/' + username);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        for (let i=daysLeft; i>=0; i--) {
            if (i == 0) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.7)
                mileage -= 0.5
                setDay14("Race Day!")
                setDay14Type("800m race @ " + data.goalTime)
                setDay14ExtraM('Daily Mileage: ' + mileage);
            }
            else if (i == 1) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.7)
                mileage -= 1
                setDay13(mileage + " miles easy + ");
                console.log("time to seconds: " + time2Seconds(data.time1))
                setDay13Type(`2x200m @ ${time2Seconds(data.time3)/4}`)
                setDay13Extra(`4x150m @ ${time2Seconds(data.time2)*0.375}`)
                // easy distance + 2x200m @ 800m + 4x150m @ 400m
            }
            else if (i == 2 ) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.7)
                mileage -= 2.5
                setDay12(`3x400m @ ${(time2Seconds(data.time4)/4)+4}-${time2Seconds(data.time4)/4+1}`);
                setDay12Type(`6x200m @ ${(time2Seconds(data.time3)/4)}-${time2Seconds(data.time3)/4-1}`)
                setDay12Extra('200m walk/jog rec.')
                setDay12ExtraM('Daily Mileage: ' + mileage)
                // 3x400m @ 3k->mile pace + 6x200m @ 800m -> 600m (200m walk/jog on everything), 2.5 miles + wu/cd
            }
            else if (i == 3) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.7)
                setDay11(`${mileage-1}-${mileage+1} miles easy`);
                setDay11Type("6x100m strides")
            }
            else if (i == 4) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.2 * 0.7)
                mileage -= 2
                setDay10(`2x(400m-200m-200m)`);
                setDay10Type(`@ ${(time2Seconds(data.time3)/2)}-${(time2Seconds(data.time2)/2)}-${(time2Seconds(data.time2)/2)}`)
                setDay10Extra('200m/400m walk/jog rec.')
                setDay10ExtraM('Daily Mileage: ' + mileage)
                //2 sets of 4-2-2(4@800m, 2's @400m) 200m walk/jog bw reps, 400m between sets
                // 2 miles + wu/cd
            }
            else if (i == 5) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.7)
                mileage -= 1
                setDay9(`${mileage} miles easy + `);
                setDay9Type(`4x50m @ ${time2Seconds(data.time1)/4}`)
                setDay9Extra(`4x150m @ ${time2Seconds(data.time1)*0.75}`)
                // easy mileage + 4x50m + 4x150m @ 200m
            }
            else if (i == 6) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.7)
                setDay8(`${mileage-1}-${mileage+1} miles easy`);
                setDay8Type("4x150m strides")
            }
            else if (i == 7) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.8)
                mileage -= 1.5
                setDay7(`600m @ ${time2MinsSecs(((time2Seconds(data.time3)/2))*1.5)}`);
                setDay7Type(`2x(4x150m @ ${time2Seconds(data.time2)*0.375}-${time2Seconds(data.time1)*0.75})`)
                setDay7Extra('50m walk, full rest')
                setDay7ExtraM('Daily Mileage: ' + mileage)
                // 600m @ 8 goal, full rest, 2 sets of 4x150m on 50 walk @ 8->4 pace
                // 1.5 miles + wu/cd
            }
            else if (i == 8) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.8)
                mileage -= 1
                setDay6(mileage + " miles easy + ");
                //console.log("time to seconds: " + time2Seconds(data.time1))
                setDay6Type(`2x200m @ ${time2Seconds(data.time3)/4}`)
                setDay6Extra(`4x150m @ ${time2Seconds(data.time2)*0.375}`)
                // easy distance + 2x200m @ 800m + 4x150m @ 400m
            }
            else if (i == 9) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.8)
                mileage -= 3
                setDay5(`3x600m @ ${time2MinsSecs(((time2Seconds(data.time4)/4)+4)*1.5)}-${time2MinsSecs((time2Seconds(data.time4)/4+1)*1.5)}`);
                setDay5Type(`6x200m @ ${(time2Seconds(data.time3)/4)}-${time2Seconds(data.time3)/4-1}`)
                setDay5Extra('200m/400m walk/jog rec.')
                setDay5ExtraM('Daily Mileage: ' + mileage)
                // 3x600m @ 3k->mile pace + 6x200m @ 800m -> 600m 
                //(200m walk/jog on everything, 400m between 6 and 2's), 3 miles + wu/cd
            }
            else if (i == 10) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.8)
                setDay4(`${mileage-1}-${mileage+1} miles easy`);
                setDay4Type("6x100m strides")
            }
            else if (i == 11) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.2 * 0.8)
                mileage -= 2.5
                setDay3(`800m @ ${time2MinsSecs(time2Seconds(data.time4)/2)}`);
                setDay3Type(`2x(500m-300m-200m)`)
                setDay3Extra(`@ ${(time2Seconds(data.time3)*0.625)}-${1.5*(time2Seconds(data.time3)/4)-1}-${(time2Seconds(data.time2)/2)}`)
                setDay3ExtraM('200m walk/ full rec.')
                setDay3Extra3('Daily Mileage: ' + mileage)
                // 800m @ mile + 2x(5-3-2) @ 800m-600m-400m (200m walk/full rest)
                // 2.5 + wu/cd
            } 
            else if (i == 12) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.8)
                mileage -= 1
                setDay2(`${mileage} miles easy + `);
                setDay2Type(`4x150m @ ${time2Seconds(data.time2)*0.375}`)
                setDay2Extra(`4x100m @ ${time2Seconds(data.time1)/2}`)
                // easy mileage + 4x150m @ 400m + 4x100m @ 200m
            }
            else if (i == 13) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.8)
                setDay4(`${mileage-1}-${mileage+1} miles easy`);
                setDay4Type("4x150m strides")
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
                if (data.goalEvent == '800m') {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.12 * 0.75)
                    mileage -= 0.5
                    setDay14("Race Day!")
                    setDay14Type("800m race @ " + data.goalTime)
                    setDay14ExtraM('Daily Mileage: ' + mileage);
                }
                else {
                    //main event is mile
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.12 * 0.75)
                    mileage -= 1
                    setDay14("Race Day!")
                    setDay14Type("1600m race @ " + data.goalTime)
                    setDay14ExtraM('Daily Mileage: ' + mileage);
                }
            }
            else if (i == 1) {
                if (data.goalEvent == '800m') {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.75)
                    mileage -= 1
                    setDay13(mileage + " miles easy + ");
                    //console.log("time to seconds: " + time2Seconds(data.time1))
                    setDay13Type(`3x200m @ ${time2Seconds(data.time2)/4}`)
                    setDay13Extra(`4x150m @ ${time2Seconds(data.time1)*0.375}`)
                }
                else {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.75)
                    mileage -= 1
                    setDay13(mileage + " miles easy + ");
                    //console.log("time to seconds: " + time2Seconds(data.time1))
                    setDay13Type(`3x200m @ ${time2Seconds(data.time3)/8}`)
                    setDay13Extra(`4x150m @ ${time2Seconds(data.time1)*0.375}`)
                }
                // if main event is 800m
                    // easy distance + 3x200m @ 800m + 4x150m @ 400m
                // else if main is mile
                    // easy distance 3x200m @ mile + 4x150m @ 800m 
            }
            else if (i == 2 ) {
                if (data.goalEvent == '800m') {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.75)
                    mileage -= 2.5
                    setDay12(`4x400m @ ${(time2Seconds(data.time4)/8)}-${time2Seconds(data.time3)/4}`);
                    setDay12Type(`4x200m @ ${(time2Seconds(data.time2)/4)}-${time2Seconds(data.time2)/4-1}`)
                    setDay12Extra('200m walk/jog rec.')
                    setDay12ExtraM('Daily Mileage: ' + mileage)
                }
                else {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.75)
                    mileage -= 2.5
                    setDay12(`2x600m @ ${time2MinsSecs(((time2Seconds(data.time4)/8)+2)*1.5)}-${time2MinsSecs((time2Seconds(data.time4)/8)*1.5)}`);
                    setDay12Type(`6x200m @ ${(time2Seconds(data.time3)/8)}-${time2Seconds(data.time2)/4}`)
                    setDay12Extra('200m walk/jog rec.')
                    setDay12ExtraM('Daily Mileage: ' + mileage)
                }
                //if main is 800m
                    // 4x400m @ 3k->mile pace + 4x200m @ 800m -> 600m 
                    //(200m walk/jog on everything), 2.5 miles + wu/cd    
                //else if mile
                    // 2x600m @ 5k->3k + 6x200m @ mile -> 800m
                    // (200m walk/jog on everything), 2.5 miles + wu/cd 
            }
            else if (i == 3) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.75)
                setDay11(`${mileage-1}-${mileage+1} miles easy`);
                setDay11Type("6x100m strides")
            }
            else if (i == 4) {
                if (data.goalEvent == '800m') {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.18 * 0.75)
                    mileage -= 2
                    setDay10(`2x(400m-200m-200m)`);
                    setDay10Type(`@ ${(time2Seconds(data.time2)/2)}-${(time2Seconds(data.time1)/2)}-${(time2Seconds(data.time1)/2)}`)
                    setDay10Extra('200m/400m walk/jog rec.')
                    setDay10ExtraM('Daily Mileage: ' + mileage)
                }
                else {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.18 * 0.75)
                    mileage -= 2
                    setDay10(`6x400m @ ${time2Seconds(data.time3)/4}-${time2Seconds(data.time2)/2}`)
                    setDay10Type('200m walk/jog rec.')
                    setDay10ExtraM('Daily Mileage: ' + mileage)
                }
                // if 800m
                    //2 sets of 4-2-2(4@800m, 2's @400m) 
                    //200m walk/jog bw reps, 400m between sets
                    // 2 miles + wu/cd
                // else if mile
                    // 6x400m @ mile->800m, 200m walk/jog
                    // 2 miles + wu/cd
            }
            else if (i == 5) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.75)
                mileage -= 1
                setDay9(`${mileage} miles easy + `);
                setDay9Type(`4x50m @ ${time2Seconds(data.time1)/8}`)
                setDay9Extra(`4x150m @ ${time2Seconds(data.time1)*0.375}`)
                // easy mileage + 4x50m + 4x150m @ 400m
            }
            else if (i == 6) {
                //easy long run
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.20 * 0.75)
                setDay8(`${mileage-1}-${mileage+1} miles easy`);
                setDay8Type(' ')
            }
            else if (i == 7) {
                if (data.goalEvent == '800m') {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.12 * 0.85)
                    mileage -= 1.5
                    setDay7(`600m @ ${time2MinsSecs(((time2Seconds(data.time2)/2))*1.5)}`);
                    setDay7Type(`2x(4x150m @ ${time2Seconds(data.time1)*0.375})`)
                    setDay7Extra('50m walk, full rest')
                    setDay7ExtraM('Daily Mileage: ' + mileage)
                }
                else {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.12 * 0.85)
                    mileage -= 2.5
                    setDay7(`1000m @ ${time2MinsSecs(((time2Seconds(data.time3)/4))*2.5)}`);
                    setDay7Type(`6x300m @ ${(time2Seconds(data.time2)*0.375)+3}-${(time2Seconds(data.time2)*0.375)}`)
                    setDay7Extra('100m walk, full rest')
                    setDay7ExtraM('Daily Mileage: ' + mileage)
                }
                // if 800m
                    // 600m @ 8 goal, full rest, 2 sets of 4x150m on 50 walk @ 8->4 pace
                    // 1.5 miles + wu/cd
                // if mile
                    // 1k @ mile goal, full rest, 6x300m on 100m walk/jog @ mile->8 pace
                    // 2.5 + wu/cd
            }
            else if (i == 8) {
                if (data.goalEvent == '800m') {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.85)
                    mileage -= 1
                    setDay6(mileage + " miles easy + ");
                    //console.log("time to seconds: " + time2Seconds(data.time1))
                    setDay6Type(`3x200m @ ${time2Seconds(data.time2)/4}`)
                    setDay6Extra(`4x150m @ ${time2Seconds(data.time1)*0.375}`)
                }
                else {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.85)
                    mileage -= 1
                    setDay6(mileage + " miles easy + ");
                    //console.log("time to seconds: " + time2Seconds(data.time1))
                    setDay6Type(`3x200m @ ${time2Seconds(data.time3)/8}`)
                    setDay6Extra(`4x150m @ ${time2Seconds(data.time1)*0.375}`)
                }
                // if main event is 800m
                    // easy distance + 3x200m @ 800m + 4x150m @ 400m
                // else if main is mile
                    // easy distance 3x200m @ mile + 4x150m @ 800m 
            }
            else if (i == 9) {
                if (data.goalEvent == '800m') {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.85)
                    mileage -= 3
                    setDay5(`4x600m @ ${time2MinsSecs((time2Seconds(data.time4)/8)*1.5)}`);
                    setDay5Type(`4x200m @ ${(time2Seconds(data.time2)/4)}-${time2Seconds(data.time2)/4-1}`)
                    setDay5Extra('200m walk/jog rec.')
                    setDay5ExtraM('Daily Mileage: ' + mileage)
                }
                else {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.85)
                    mileage -= 3.5
                    setDay5(`3x1000m @ ${time2MinsSecs(((time2Seconds(data.time4)/8)+3)*2.5)}-${time2MinsSecs((time2Seconds(data.time4)/8)*2.5)}`);
                    setDay5Type(`6x200m @ ${(time2Seconds(data.time3)/8)}-${time2Seconds(data.time2)/4}`)
                    setDay5Extra('200m walk/jog rec.')
                    setDay5ExtraM('Daily Mileage: ' + mileage)
                }
                //if main is 800m
                    // 4x600m @ 3k + 4x200m @ 800m -> 600m 
                    //(200m walk/jog on everything), 3 miles + wu/cd    
                //else if mile
                    // 3x1k @ 5k->3k + 6x200m @ mile -> 800m
                    // (200m walk/jog on everything), 3.5 miles + wu/cd 
            }
            else if (i == 10) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.85)
                setDay4(`${mileage-1}-${mileage+1} miles easy`);
                setDay4Type("6x100m strides")
            }
            else if (i == 11) {
                if (data.goalEvent == '800m') {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.18 * 0.85)
                    mileage -= 2.5
                    setDay3(`800m @ ${time2MinsSecs(time2Seconds(data.time3)/2)}`);
                    setDay3Type(`2x(500m-300m-200m)`)
                    setDay3Extra(`@ ${(time2Seconds(data.time2)*0.625)}-${1.5*(time2Seconds(data.time2)/4)-1}-${(time2Seconds(data.time1)/2)}`)
                    setDay3ExtraM('200m walk/ full rec.')
                    setDay3Extra3('Daily Mileage: ' + mileage)
                }
                else {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.18 * 0.85)
                    mileage -= 3
                    setDay3(`1200m @ ${time2MinsSecs(time2Seconds(data.time4)*0.375)}`);
                    setDay3Type(`2x(600m-400m-200m)`)
                    setDay3Extra(`@ ${time2MinsSecs((time2Seconds(data.time3)*0.375))}-${(time2Seconds(data.time2)/2)+1}-${(time2Seconds(data.time1)/2)+1}`)
                    setDay3ExtraM('200m walk/ full rec.')
                    setDay3Extra3('Daily Mileage: ' + mileage)
                }
                // if 800m
                    // 800m @ mile + 2x(5-3-2) @ 800m-600m-400m (200m walk/full rest)
                    // 2.5 + wu/cd
                // else if mile
                    // 1200m @ 3k + 2x(6-4-2) @ mile-800m-400m (200m walk/full rest)
                    // 3 + wu/cd
            } 
            else if (i == 12) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.85)
                mileage -= 1
                setDay2(`${mileage} miles easy + `);
                setDay2Type(`6x150m accelerations`)
                // easy mileage + 6x150m accelerations
            }
            else if (i == 13) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.20 * 0.85)
                setDay1(`${mileage-1}-${mileage+1} miles easy`);
                setDay1Type(' ')
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
                if (data.goalEvent == '1600m') {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.12 * 0.8)
                    mileage -= 1
                    setDay14("Race Day!")
                    setDay14Type("1600m race @ " + data.goalTime)
                    setDay14ExtraM('Daily Mileage: ' + mileage);
                }
                else {
                    //main event is 2mile
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.12 * 0.8)
                    mileage -= 2
                    setDay14("Race Day!")
                    setDay14Type("3200m race @ " + data.goalTime)
                    setDay14ExtraM('Daily Mileage: ' + mileage);
                }
            }
            else if (i == 1) {
                if (data.goalEvent == '1600m') {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.8)
                    mileage -= 1
                    setDay13(mileage + " miles easy + ");
                    //console.log("time to seconds: " + time2Seconds(data.time1))
                    setDay13Type(`3x200m @ ${time2Seconds(data.time2)/8}`)
                    setDay13Extra(`4x150m @ ${time2Seconds(data.time1)*0.1875}`)
                }
                else {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.8)
                    mileage -= 1
                    setDay13(mileage + " miles easy + ");
                    //console.log("time to seconds: " + time2Seconds(data.time1))
                    setDay13Type(`2x300m @ ${time2Seconds(data.time3)/16*1.5}`)
                    setDay13Extra(`4x150m @ ${time2Seconds(data.time1)*0.1875}`)
                }
                // if main is mile
                    // easy distance 3x200m @ mile + 4x150m @ 800m 
                // else if 3200m
                    // easy distance 2x300m @ 3200m + 4x150m @ mile->800m
            }
            else if (i == 2 ) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.8)
                mileage -= 2.5
                setDay12(`2x600m @ ${time2MinsSecs(time2Seconds(data.time4)*0.12)}-${time2MinsSecs(time2Seconds(data.time3)*0.1875)}`);
                setDay12Type(`6x200m @ ${(time2Seconds(data.time2)/8)}-${time2Seconds(data.time1)/4-1}`)
                setDay12Extra('200m walk/jog rec.')
                setDay12ExtraM('Daily Mileage: ' + mileage)
                // 2x600m @ 5k->3k + 6x200m @ mile -> 800m
                // (200m walk/jog on everything), 2.5 miles + wu/cd 
            }
            else if (i == 3) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.8)
                setDay11(`${mileage-1}-${mileage+1} miles easy`);
                setDay11Type("6x100m strides")
            }
            else if (i == 4) {
                if (data.goalEvent == '1600m') {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.18 * 0.8)
                    mileage -= 3
                    setDay10(`10x300m @ ${Math.ceil((time2Seconds(data.time2)*.1875)+1)}-${Math.floor(time2Seconds(data.time1)*.375)}`);
                    setDay10Type('100m walk/jog rec.')
                    setDay10ExtraM('Daily Mileage: ' + mileage)
                }
                else {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.18 * 0.8)
                    mileage -= 4.5
                    setDay10(`12x400m @ ${Math.floor(time2Seconds(data.time3)/8)}-${Math.floor(time2Seconds(data.time2)/4)}`);
                    setDay10Type('200m walk/jog rec.')
                    setDay10ExtraM('Daily Mileage: ' + mileage)
                }
                //if mile
                    // 10-12x300m @ mile->800m, 100m walk/jog
                    // 2.5-3 miles(depends on total mileage) + wu/cd
                // else if 3200m
                    // 10-12x400m @ 3200m->mile, 200m walk/jog
                    // 4-4.5 miles(depends on total mileage) + wu/cd
            }
            else if (i == 5) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.8)
                mileage -= 1
                setDay9(`${mileage} miles easy + `);
                setDay9Type(`8x100m @ ${time2Seconds(data.time1)/8}`)
                // easy mileage + 8x100m @ 800m
            }
            else if (i == 6) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.20 * 0.8)
                setDay8(`${mileage-1}-${mileage+1} miles easy`);
                setDay8Type(' ')
            }
            else if (i == 7) {
                if (data.goalEvent == '1600m') {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.12 * 0.9)
                    mileage -= 2.5
                    setDay7(`1000m @ ${time2MinsSecs(((time2Seconds(data.time2)/4))*2.5)}`);
                    setDay7Type(`6x300m @ ${(time2Seconds(data.time2)*0.1875)+3}-${(time2Seconds(data.time1)*0.375)}`)
                    setDay7Extra('100m walk, full rest')
                    setDay7ExtraM('Daily Mileage: ' + mileage)
                }
                else {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.12 * 0.9)
                    mileage -= 3.5
                    setDay7(`1600m @ ${time2MinsSecs((time2Seconds(data.time3)/2))}`);
                    setDay7Type(`8x300m @ ${(time2Seconds(data.time2)*0.1875)+3}-${(time2Seconds(data.time1)*0.375)}`)
                    setDay7Extra('100m walk, full rest')
                    setDay7ExtraM('Daily Mileage: ' + mileage)
                }
                // if mile
                    // 1k @ mile goal, full rest, 4x250m on 150m walk/jog @ mile->8 pace, full rest, 600m @ mile goal
                    // 2.5 + wu/cd
                // if 3200m
                    // mile @ 3k goal, full rest, 6x300m on 100m walk/jog @ mile pace, full rest, 800m @ mile
                    // 3.5 + wu/cd
            }
            else if (i == 8) {
                if (data.goalEvent == '1600m') {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.9)
                    mileage -= 1
                    setDay6(mileage + " miles easy + ");
                    //console.log("time to seconds: " + time2Seconds(data.time1))
                    setDay6Type(`3x200m @ ${time2Seconds(data.time2)/8}`)
                    setDay6Extra(`4x150m @ ${time2Seconds(data.time1)*0.1875}`)
                }
                else {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.9)
                    mileage -= 1
                    setDay6(mileage + " miles easy + ");
                    //console.log("time to seconds: " + time2Seconds(data.time1))
                    setDay6Type(`2x300m @ ${time2Seconds(data.time3)/16*1.5}`)
                    setDay6Extra(`4x150m @ ${time2Seconds(data.time1)*0.1875}`)
                }
                // if main is mile
                    // easy distance 3x200m @ mile + 4x150m @ 800m 
                // else if 3200m
                    // easy distance 2x300m @ 3200m + 4x150m @ mile->800m
            }
            else if (i == 9) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.9)
                mileage -= 2.5
                setDay5(`3x1000m @ ${time2MinsSecs(time2Seconds(data.time4)*0.2)}-${time2MinsSecs(time2Seconds(data.time3)*0.3125)}`);
                setDay5Type(`6x200m @ ${(time2Seconds(data.time2)/8)}-${time2Seconds(data.time1)/4-1}`)
                setDay5Extra('200m walk/jog rec.')
                setDay5ExtraM('Daily Mileage: ' + mileage)
                // 3x1k @ 5k->3k + 6x200m @ mile -> 800m
                // (200m walk/jog on everything), 3.5 miles + wu/cd
            }
            else if (i == 10) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.15 * 0.9)
                setDay4(`${mileage-1}-${mileage+1} miles easy`);
                setDay4Type("6x100m strides")
            }
            else if (i == 11) {
                if (data.goalEvent == '1600m') {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.18 * 0.9)
                    mileage -= 3.5
                    setDay3(`8x300m @ ${time2Seconds(data.time2)*0.1875} w/ 100m walk/jog`);
                    setDay3Type(`1200m @ ${time2MinsSecs(time2Seconds(data.time3)*0.375)} + 400m @ ${time2Seconds(data.time1)/2}`)
                    setDay3Extra(`@ ${(time2Seconds(data.time2)*0.625)}-${1.5*(time2Seconds(data.time2)/4)-1}-${(time2Seconds(data.time1)/2)}`)
                    setDay3ExtraM('400m walk/jog after last 300m and 1200m')
                    setDay3Extra3('Daily Mileage: ' + mileage)
                }
                else {
                    let mileage = Math.floor(parseInt(data.mileage, 10) * 0.18 * 0.9)
                    mileage -= 4.5
                    setDay3(`2000m @ ${time2MinsSecs(time2Seconds(data.time4)*0.4)}`);
                    setDay3Type(`4x 800m(600m-200m)`)
                    setDay3Extra(`@ (${time2MinsSecs((time2Seconds(data.time4)*0.12))}-${(time2Seconds(data.time1)/4)})`)
                    setDay3ExtraM('400m walk/jog rec.')
                    setDay3Extra3('Daily Mileage: ' + mileage)
                }
                //if mile
                    // 8x300m @ mile(100 walk/jog) + 1200m @ 3k + 400m @ 800m
                    // 3.5, 400m between the 3 parts
                // if 3200m
                    // 2k @ 5k, full rest, 4 x split 800m(first 600m @ 5k, last 200m @ 800m) 400m rest
                    // 4.5   

            } 
            else if (i == 12) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.1 * 0.9)
                mileage -= 1
                setDay2(`${mileage} miles easy + `);
                setDay2Type(`6x150m accelerations`)
                // easy mileage + 6x150m accelerations
            }
            else if (i == 13) {
                let mileage = Math.floor(parseInt(data.mileage, 10) * 0.20 * 0.9)
                setDay1(`${mileage-1}-${mileage+1} miles easy`);
                setDay1Type(' ')
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
                placeholder='Type'
                value={day1Type} 
                onChangeText={(type) => {setDay1Type(type)}}
                />
                <TextInput 
                placeholder=''
                value={day1Extra} 
                onChangeText={(extra) => {setDay1Extra(extra)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder=''
                value={day1ExtraM} 
                onChangeText={(extraM) => {setDay1ExtraM(extraM)}}
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
                placeholder='Type'
                value={day2Type} 
                onChangeText={(type) => {setDay2Type(type)}}
                />
                <TextInput 
                placeholder=''
                value={day2Extra} 
                onChangeText={(extra) => {setDay2Extra(extra)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder=''
                value={day2ExtraM} 
                onChangeText={(extraM) => {setDay2ExtraM(extraM)}}
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
                placeholder='Type'
                value={day3Type} 
                onChangeText={(type) => {setDay3Type(type)}}
                />
                <TextInput 
                placeholder=''
                value={day3Extra} 
                onChangeText={(extra) => {setDay3Extra(extra)}}
                />
                <TextInput 
                placeholder=''
                value={day3ExtraM} 
                onChangeText={(extraM) => {setDay3ExtraM(extraM)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder=''
                value={day3Extra3} 
                onChangeText={(extra3) => {setDay3Extra3(extra3)}}
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
                placeholder='Type'
                value={day4Type} 
                onChangeText={(type) => {setDay4Type(type)}}
                />
                <TextInput 
                placeholder=''
                value={day4Extra} 
                onChangeText={(extra) => {setDay4Extra(extra)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder=''
                value={day4ExtraM} 
                onChangeText={(extraM) => {setDay4ExtraM(extraM)}}
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
                placeholder='Type'
                value={day5Type} 
                onChangeText={(type) => {setDay5Type(type)}}
                />
                <TextInput 
                placeholder=''
                value={day5Extra} 
                onChangeText={(extra) => {setDay5Extra(extra)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder=''
                value={day5ExtraM} 
                onChangeText={(extraM) => {setDay5ExtraM(extraM)}}
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
                placeholder='Type'
                value={day6Type} 
                onChangeText={(type) => {setDay6Type(type)}}
                />
                <TextInput 
                placeholder=''
                value={day6Extra} 
                onChangeText={(extra) => {setDay6Extra(extra)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder=''
                value={day6ExtraM} 
                onChangeText={(extraM) => {setDay6ExtraM(extraM)}}
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
                placeholder='Type'
                value={day7Type} 
                onChangeText={(type) => {setDay7Type(type)}}
                />
                <TextInput 
                placeholder=''
                value={day7Extra} 
                onChangeText={(extra) => {setDay7Extra(extra)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder=''
                value={day7ExtraM} 
                onChangeText={(extraM) => {setDay7ExtraM(extraM)}}
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
                placeholder='Type'
                value={day8Type} 
                onChangeText={(type) => {setDay8Type(type)}}
                />
                <TextInput 
                placeholder=''
                value={day8Extra} 
                onChangeText={(extra) => {setDay8Extra(extra)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder=''
                value={day8ExtraM} 
                onChangeText={(extraM) => {setDay8ExtraM(extraM)}}
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
                placeholder='Type'
                value={day9Type} 
                onChangeText={(type) => {setDay9Type(type)}}
                />
                <TextInput 
                placeholder=''
                value={day9Extra} 
                onChangeText={(extra) => {setDay9Extra(extra)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder=''
                value={day9ExtraM} 
                onChangeText={(extraM) => {setDay9ExtraM(extraM)}}
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
                placeholder='Type'
                value={day10Type} 
                onChangeText={(type) => {setDay10Type(type)}}
                />
                <TextInput 
                placeholder=''
                value={day10Extra} 
                onChangeText={(extra) => {setDay10Extra(extra)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder=''
                value={day10ExtraM} 
                onChangeText={(extraM) => {setDay10ExtraM(extraM)}}
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
                placeholder='Type'
                value={day11Type} 
                onChangeText={(type) => {setDay11Type(type)}}
                />
                <TextInput 
                placeholder=''
                value={day11Extra} 
                onChangeText={(extra) => {setDay11Extra(extra)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder=''
                value={day11ExtraM} 
                onChangeText={(extraM) => {setDay11ExtraM(extraM)}}
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
                placeholder='Type'
                value={day12Type} 
                onChangeText={(type) => {setDay12Type(type)}}
                />
                <TextInput 
                placeholder=''
                value={day12Extra} 
                onChangeText={(extra) => {setDay12Extra(extra)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder=''
                value={day12ExtraM} 
                onChangeText={(extraM) => {setDay12ExtraM(extraM)}}
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
                placeholder='Type'
                value={day13Type} 
                onChangeText={(type) => {setDay13Type(type)}}
                />
                <TextInput 
                placeholder=''
                value={day13Extra} 
                onChangeText={(extra) => {setDay13Extra(extra)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder=''
                value={day13ExtraM} 
                onChangeText={(extraM) => {setDay13ExtraM(extraM)}}
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
                placeholder='Type'
                value={day14Type} 
                onChangeText={(type) => {setDay14Type(type)}}
                />
                <TextInput 
                placeholder=''
                value={day14Extra} 
                onChangeText={(extra) => {setDay14Extra(extra)}}
                />
                <TextInput 
                style={styles.inputWrap}
                placeholder=''
                value={day14ExtraM} 
                onChangeText={(extraM) => {setDay14ExtraM(extraM)}}
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