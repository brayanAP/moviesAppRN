import React from 'react';
import {ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import MoviePoster from '../../components/MoviePoster';
import Carousel from '../../components/Carousel';
import useMoviesNowPlaying from '../../hooks/useMoviesNowPlaying';

const MoviesLandingScreen = () => {
  const {moviesNowPlaying, loadingMoviesNowPlaying} = useMoviesNowPlaying();

  if (loadingMoviesNowPlaying) {
    return <ActivityIndicator size="large" color="red" />;
  }

  return (
    <ScrollView>
      <Carousel
        data={moviesNowPlaying}
        itemWidth={Dimensions.get('window').width * 0.65}
        itemHeight={400}
        containerStyle={{marginVertical: 20}}
        keyExtractor={item => item.poster_path}
        renderItem={(item, styleContainer) => (
          <MoviePoster
            poster={item.poster_path}
            styleContainer={styleContainer}
          />
        )}
      />
    </ScrollView>
  );
};

export default MoviesLandingScreen;
