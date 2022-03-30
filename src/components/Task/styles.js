import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles'

export const styles = StyleSheet.create({
  container: {

    height: 80,
    borderRadius: 7,
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 10,

    width: '100%',
    backgroundColor: '#3B5368', 
    paddingVertical: 10,
    padding: 20,
    borderBottomRightRadius: 7,
    alignItems: 'center', 
  }, 
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#14212B',
    fontFamily: fonts.REGULAR,
    width: '100%',
    fontSize: 18,
    color: '#14212B',
    paddingBottom: 5,
    paddingLeft: 5,
  },
  containerButtons: {
    backgroundColor: 'red',
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  buttonClearTask:{
    padding: 10,
    backgroundColor: '#14212B',
    borderRadius: 7,
    marginRight:10,
    height: 50
  }, 
  buttonAddTask: {
    flex: 1,
    height: 50,
    backgroundColor: '#14212B',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  }, 
  buttonAddText: {
    color: '#3B5368',
    fontFamily: fonts.BOLD,
    fontSize: 18
  }

})