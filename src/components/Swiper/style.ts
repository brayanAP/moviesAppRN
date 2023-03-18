import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.4,
  },
  item: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
});

export default styles;
