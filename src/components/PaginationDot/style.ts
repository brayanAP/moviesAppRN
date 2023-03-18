import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  paginationContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    marginHorizontal: Dimensions.get('window').width * 0.02,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  paginationDotActive: {
    backgroundColor: '#fff',
  },
});

export default styles;
