import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { auth } from '@react-native-firebase/auth'
import { styles } from './styles';
import { colors } from '../../styles';

export function Header() {
  return (
    <View style={styles.container} >
      <Text style={styles.title} > Tarefas </Text>

      <View style={styles.containerRight} >
        <TouchableOpacity>
        <Feather
          name="plus"
          size={30}
          color={colors.PLACEHOLDER_TEXT_COLOR}
        />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: 10  
          }}
          onPress={() => auth().signOut() }
        >
        <Feather
          name="log-out"
          size={30}
          color={colors.PLACEHOLDER_TEXT_COLOR}
        />
        </TouchableOpacity>
      </View>

    </View>
  )
}