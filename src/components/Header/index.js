import React from 'react';
import {
  View,
  Text,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { styles } from './styles';

export function Header(){
  return (
    <View style={styles.container} >
      <Text> Tarefas </Text>

      <View style={styles.containerRight} >
      <Text> Tarefas </Text>
    </View>

    </View>
  )
}