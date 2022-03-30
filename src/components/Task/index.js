import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { Feather } from '@expo/vector-icons'
import { auth } from '@react-native-firebase/auth'
import { styles } from './styles';
import { colors } from '../../styles';

function DeleteButton() {
  return (
    <TouchableOpacity
      style={styles.containerDelete}
    >

      <Feather
        name="check-circle"
        size={35}
        color="#3B5368"
      />

    </TouchableOpacity>
  )
}

export function Task() {
  return (
    <Swipeable
      renderRightActions={() => <DeleteButton />}
      containerStyle={{ 
        paddingHorizontal: 20,
        marginTop: 10
       }}
    >

      <TouchableOpacity
        style={styles.container}
      >
        <Text> Minha primeira tarefa </Text>
      </TouchableOpacity>

    </Swipeable>
  )
}