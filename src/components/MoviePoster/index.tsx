import React from 'react';
import {Image, View, ViewStyle} from 'react-native';
import style from './style';

type Props = {
  poster: string;
  styleContainer?: ViewStyle;
};

const MoviePoster: React.FC<Props> = ({poster, styleContainer}) => (
  <View style={styleContainer}>
    <Image
      style={style.image}
      source={{
        uri: `https://image.tmdb.org/t/p/w500${poster}`,
      }}
    />
  </View>
);

export default MoviePoster;
