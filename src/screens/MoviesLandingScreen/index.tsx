import React from 'react';
import {Button, Text, View, ActivityIndicator} from 'react-native';
import useMoviesNowPlaying from '../../hooks/useMoviesNowPlaying';

const MoviesLandingScreen = () => {
  const {
    moviesNowPlaying,
    loadingMoviesNowPlaying,
    nextPageMoviesNowPlaying,
    responseMoviesNowPlaying,
  } = useMoviesNowPlaying();

  if (loadingMoviesNowPlaying) {
    return <ActivityIndicator size="large" color="red" />;
  }

  return (
    <View>
      <Text>
        {responseMoviesNowPlaying?.page}
        {' to '}
        {responseMoviesNowPlaying?.total_pages}
      </Text>
      <Button title="Siguiente" onPress={nextPageMoviesNowPlaying} />
    </View>
  );
};

export default MoviesLandingScreen;
