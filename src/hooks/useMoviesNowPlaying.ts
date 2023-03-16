import {useState, useEffect} from 'react';
import movieApiService from '../api/movieApiService';
import {
  MovieNowPlayingResponse,
  MovieNowPlayingResult,
} from '../types/movieApiTypes';

const useMoviesNowPlaying = (initialPage = 1) => {
  const [results, setResults] = useState<Array<MovieNowPlayingResult>>([]);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const [hasMore, setHasMore] = useState(true);
  const [response, setResponse] = useState<Pick<
    MovieNowPlayingResponse,
    'page' | 'total_pages' | 'total_results'
  > | null>(null);

  const nextPageMoviesNowPlaying = () => {
    if (!loading && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const {data} = await movieApiService.get<MovieNowPlayingResponse>(
          'movie/now_playing',
          {
            params: {
              page,
            },
          },
        );
        setResults(prev => [...prev, ...data.results]);
        if (data.total_pages === page) {
          setHasMore(false);
          return;
        }
        setResponse({
          page: data.page,
          total_pages: data.total_pages,
          total_results: data.total_results,
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return {
    moviesNowPlaying: results,
    loadingMoviesNowPlaying: loading,
    errorMoviesNowPlaying: error,
    nextPageMoviesNowPlaying,
    responseMoviesNowPlaying: response,
  };
};

export default useMoviesNowPlaying;
