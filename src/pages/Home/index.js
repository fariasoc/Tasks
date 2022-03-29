import React from 'react';
import { styles } from './styles';
import { 
  View, 
  Text,
  Button
} from 'react-native'

import { Header } from '../../components/Header';
import { NewTask } from '../../components/NewTask';

export function Home(){
  return (
    <View style={styles.container} >
      <Header />
      <NewTask />
      <Text> Home </Text>
    </View>
  )
}