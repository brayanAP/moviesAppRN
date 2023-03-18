import {Dimensions, StyleSheet} from 'react-native';
export const ITEM_MARGIN = Dimensions.get('window').width * 0.02;

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: ITEM_MARGIN,
  },
});

export default styles;
