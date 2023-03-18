import React, {useState, useRef} from 'react';
import {View, FlatList, ViewStyle} from 'react-native';
import PaginationDot from '../PaginationDot';
import style, {ITEM_MARGIN} from './style';

type Props<T> = {
  data: T[];
  itemWidth: number;
  itemHeight: number;
  containerStyle?: ViewStyle;
  showPagination?: boolean;
  keyExtractor: (item: T, index: number) => string;
  renderItem: (item: T, style: ViewStyle) => React.ReactElement;
};

type CarouselComponent = <T>(props: Props<T>) => React.ReactElement;

const Carousel: CarouselComponent = ({
  data,
  itemWidth,
  itemHeight,
  containerStyle,
  showPagination,
  keyExtractor,
  renderItem,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const viewabilityConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: any}) => {
      setCurrentIndex(viewableItems[0].index);
    },
  ).current;

  return (
    <View style={[{height: itemHeight}, containerStyle]}>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled={false}
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemWidth + ITEM_MARGIN * 2}
        snapToAlignment="center"
        decelerationRate="fast"
        viewabilityConfig={viewabilityConfigRef.current}
        onViewableItemsChanged={onViewableItemsChanged}
        renderItem={({item}) =>
          renderItem(item, {
            ...style.item,
            height: itemHeight,
            width: itemWidth,
          })
        }
      />
      {showPagination && (
        <PaginationDot
          length={data.length}
          evaluateDotActive={index => index === currentIndex}
        />
      )}
    </View>
  );
};

export default Carousel;
