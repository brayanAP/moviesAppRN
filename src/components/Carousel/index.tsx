import React, {useState, useRef} from 'react';
import {View, FlatList, ViewStyle} from 'react-native';
import style, {ITEM_MARGIN} from './style';

interface Props<T> {
  data: (T & {id: string | number})[];
  itemWidth: number;
  itemHeight: number;
  containerStyle?: ViewStyle;
  renderItem: (item: T, style: ViewStyle) => React.ReactElement;
}

type CarruselComponent = <T>(props: Props<T>) => React.ReactElement;

const Carrusel: CarruselComponent = ({
  data,
  itemWidth,
  itemHeight,
  containerStyle,
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
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled={false}
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemWidth + ITEM_MARGIN * 2}
        snapToAlignment="center"
        decelerationRate="fast"
        viewabilityConfig={viewabilityConfigRef.current}
        onViewableItemsChanged={onViewableItemsChanged}
        contentContainerStyle={style.contentContainer}
        renderItem={({item}) =>
          renderItem(item, {
            ...style.itemContainer,
            height: itemHeight,
            width: itemWidth,
          })
        }
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

export default Carrusel;
