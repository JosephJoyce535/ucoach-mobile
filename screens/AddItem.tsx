import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
//import { TextInput } from 'react-native-web';
import { useState } from 'react';
import { ref, set, update, onValue, remove } from "firebase/database";
import { db } from '../config/firebase'; 

export default function App() {

  const [username, setName] = useState(''); 
  const [email, setEmail] = useState('');


  function createData() {
    set(ref(db, 'users/' + username), {          
      username: username,
      email: email  
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

    update(ref(db, 'users/' + username), {          
      username: username,
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

    const starCountRef = ref(db, 'users/' + username);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      setEmail(data.email);   

    });

  }

  function deleteData () {

    remove(ref(db, 'users/' + username));
    alert('removed');
  }

  return (
    <View style={styles.container}>
      <Text>Firebase crud!</Text> 

      <TextInput value={username} onChangeText={(username) => {setName(username)}} placeholder="Username" style={styles.textBoxes}></TextInput>
      <TextInput value={email} onChangeText={(email) => {setEmail(email)}} placeholder="Email" style={styles.textBoxes}></TextInput>

      <button onClick={createData}>Submit Data </button>      

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