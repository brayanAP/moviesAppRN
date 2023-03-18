import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.4,
  },
  item: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  paginationDotActive: {
    backgroundColor: '#fff',
  },
});

export default styles;
