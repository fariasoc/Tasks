import React from 'react';
import { styles } from './styles';
import { 
  View, 
  Text,
  Button
} from 'react-native'

import auth from '@react-native-firebase/auth'
import { Header } from '../../components/Header';

export function Home(){
  return (
    <View style={styles.container} >
      <Header />
      <Text> Home </Text>
    </View>
  )
}