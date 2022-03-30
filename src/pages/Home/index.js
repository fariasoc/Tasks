import React, {useState} from 'react';
import { styles } from './styles';
import { 
  View, 
  Text,
  Button,
  StatusBar
} from 'react-native'

import { Header } from '../../components/Header';
import { NewTask } from '../../components/NewTask';
import { Task } from '../../components/Task';

export function Home(){

  const [ newTaskIsVisible, setNewTaskIsVisible  ] = useState(false)

  return (
    <View style={styles.container} >
      < StatusBar backgroundColor="#14212B" />
      <Header
        newTaskIsVisible={newTaskIsVisible}
        setNewTaskIsVisible={setNewTaskIsVisible}
      />

      { newTaskIsVisible && <NewTask />  }

    <Task />
    </View>
  )
}