import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    height: 70,
    borderRadius: 7,
    alignItems: 'flex-start', 
    justifyContent: 'center',
    padding: 10,
    flexWrap: 'wrap',
    backgroundColor: '#14212B'
  }, 
  containerDelete: {
    borderRadius: 7,
    marginRight: 20,
    paddingRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  title: {
    fontSize: 18,
    color: '#0000'

  }

})