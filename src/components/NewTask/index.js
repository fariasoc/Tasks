import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { auth } from '@react-native-firebase/auth'
import { styles } from './styles';
import { colors } from '../../styles';

export function NewTask() {

  const [task, setTask] = useState('')

  return (
    <View style={styles.container} >
      <TextInput
        value={task}
        onChangeText={value => setTask(value)}
        style={styles.input}
        placeholder="Qual sua tarefa?"
        placeholderTextColor="#14212B"
      />

      <View style={styles.containerButtons}>
        <TouchableOpacity
          style={styles.buttonClearTask}
          onPress={() => { }}
        >

          <Feather
            name="delete"
            size={30}
            color="#3B5368"
          />

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonAddTask}
          onPress={() => { }}
        >

          <Text style={styles.buttonAddText} > Adicionar Tarefas </Text>

        </TouchableOpacity>

      </View>

    </View>
  )
}