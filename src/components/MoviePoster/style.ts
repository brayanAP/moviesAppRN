import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: 200,
    height: 400,
    marginHorizontal: 10,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});
