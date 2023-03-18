import React, {useState, useRef} from 'react';
import {View, FlatList} from 'react-native';
import style from './style';

interface Props<T> {
  data: T[];
  keyExtractor: (item: T, index: number) => string;
  renderItem: (item: T) => React.ReactElement;
}

type SwiperComponent = <T>(props: Props<T>) => React.ReactElement;

const Swiper: SwiperComponent = ({data, keyExtractor, renderItem}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const viewabilityConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: any}) => {
      setCurrentIndex(viewableItems[0].index);
    },
  ).current;

  return (
    <View style={style.container}>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewabilityConfigRef.current}
        onViewableItemsChanged={onViewableItemsChanged}
        renderItem={({item}) => (
          <View style={style.item}>{renderItem(item)}</View>
        )}
      />
      <View style={style.paginationContainer}>
        {data.map((_, i: number) => (
          <View
            key={i}
            style={[
              style.paginationDot,
              i === currentIndex ? style.paginationDotActive : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Swiper;
