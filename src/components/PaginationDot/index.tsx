import React from 'react';
import {View} from 'react-native';
import style from './style';

type Props = {
  length: number;
  evaluateDotActive: (index: number) => boolean;
};

const generateDynamicArray = (length: number) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(i);
  }
  return array;
};

const PaginationDot: React.FC<Props> = ({length, evaluateDotActive}) => (
  <View style={style.paginationContainer}>
    {generateDynamicArray(length).map(page => (
      <View
        key={page}
        style={[
          style.paginationDot,
          evaluateDotActive(page) ? style.paginationDotActive : null,
        ]}
      />
    ))}
  </View>
);

export default PaginationDot;
