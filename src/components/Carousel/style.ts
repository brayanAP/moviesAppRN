import {Dimensions, StyleSheet} from 'react-native';
export const ITEM_MARGIN = Dimensions.get('window').width * 0.02;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: ITEM_MARGIN,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: ITEM_MARGIN,
  },
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
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: ITEM_MARGIN / 2,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  paginationDotActive: {
    backgroundColor: '#fff',
  },
});

export default styles;
