import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import { getAuth, signOut } from 'firebase/auth';
import CheckBox from '@react-native-community/checkbox';
import { db } from '../config/firebase';
import { ref, onValue, push, update, remove } from 'firebase/database';

const auth = getAuth();

const [doneState, setDone] = useState(false);

export default function HomeScreen() {
  const { user } = useAuthentication();
  const onCheck = (isChecked) => {
    setDone(isChecked);
  };
  const [todos, setTodos] = useState({});
  const [presentTodo, setPresentTodo] = useState('');

  function addNewTodo() {
    push(ref(db, '/todos'), {
      done: false,
      title: presentTodo,
    });
    setPresentTodo('');
  }

  function clearTodos() {
    remove(ref(db, '/todos'));
  }

  return (
    <View style={styles.container}>
      <Text>Welcome {user?.email}!</Text>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}>
        <View>
          {/* Empty view: will contain to-do items soon */}
        </View>

        <TextInput
          placeholder="New todo"
          value={presentTodo}
          style={styles.textInput}
          onChangeText={text => {
            setPresentTodo(text);
          }}
          onSubmitEditing={addNewTodo}
        />

        <View>
          <View style={{marginTop: 20}}>
            <Button
              title="Add new todo"
              onPress={addNewTodo}
              color="green"
              disabled={presentTodo == ''}
            />
          </View>

          <View style={{marginTop: 20}}>
            <Button
              title="Clear the todo list"
              onPress={clearTodos}
              color="red"
              style={{marginTop: 20}}
            />
          </View>
        </View>
      </ScrollView>

      <View style = {styles.todoItem}>
        <CheckBox 
          onValueChange={onCheck}
          value={doneState}
        />
        <Text style={[styles.todoText, {opacity: doneState ? 0.2 : 1}]}>
          A random To-Do item
        </Text>
      </View>

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
  contentContainerStyle: {
    padding: 24
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#afafaf',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 20,
    fontSize: 20,
  },
  todoItem: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  todoText: {
    paddingHorizontal: 5,
    fontSize: 16
  },
});