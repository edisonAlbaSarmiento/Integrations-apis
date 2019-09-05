import React, { Component } from 'react';
import {
  MainWrapper,
  WrapperHeader,
  TitleText,
  WrapperCategories,
  WrapperCategory,
  TextDefault,
  WrapperList,
  ItemSelector,
  WrapperMovie,
  TitleMovie,
  WrapperDetail,
  WrapperImage,
  WrapperInfo,
  TextDetail
} from './style';

const API_KEY = 'be24a9ddbeef234696f2fc061ac46c76';
const PATH_IMG = 'https://image.tmdb.org/t/p/w500';

export default class News extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: null,
      movies: null,
      detail: false,
      filterMovies: null,
    }
  }
  componentDidMount() {
    this.getCategoriesMovies();
    this.getListMovies();
  }

  getCategoriesMovies = async () => {
    await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=es-ES`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
      .then(responseJson => {
        this.setState({ categories: responseJson })
      })
      .catch(err => {
        console.log(err);
      });
  };

  getListMovies = async () => {
    await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es-ES`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ movies: responseJson, filterMovies: responseJson });
      })
      .catch(err => {
        console.log(err);
      });
  };

  showDetail = () => {
    const { detail } = this.state;
    this.setState({ detail: !detail })
  };

  onFilterCategory = id => {
    const { movies } = this.state;
    if (id > 0) {
      const filter = movies.results.filter(movie => movie.genre_ids == id);
      console.log('ESTA NINI', filter);
      this.setState({ filterMovies: { results: filter } });
    } else {
      this.setState({ filterMovies: movies });
    }
  };

  render() {
    const { categories, detail, filterMovies } = this.state;
    if (categories && filterMovies) {
      return (
        <MainWrapper>
          <WrapperHeader>
            <TitleText>Peliculas</TitleText>
          </WrapperHeader>
          <WrapperCategories horizontal showsHorizontalScrollIndicator={false}>
            <WrapperCategory key={'0'} onPress={() => this.onFilterCategory(0)}>
              <TextDefault>Todas</TextDefault>
            </WrapperCategory>
            {categories &&
              categories.genres.map(category => {
                return (
                  <WrapperCategory key={category.id} onPress={() => this.onFilterCategory(category.id)}>
                    <TextDefault>{category.name}</TextDefault>
                  </WrapperCategory>
                )
              })
            }
          </WrapperCategories>
          {filterMovies !== [] ? (
            <WrapperList showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
              {!detail && filterMovies ?
                filterMovies.results.map(movie => {
                  return (
                    <ItemSelector key={movie.id} onPress={this.showDetail}>
                      <WrapperMovie source={{ uri: `${PATH_IMG}${movie.poster_path}` }}>
                        <TitleMovie>{movie.title}</TitleMovie>
                      </WrapperMovie>
                    </ItemSelector>
                  )}) :
                filterMovies.results.map(movie => {
                  return (
                    <WrapperDetail key={movie.id} onPress={this.showDetail}>
                      <WrapperImage source={{ uri: `${PATH_IMG}${movie.poster_path}` }}>
                        <TitleMovie>{movie.title}</TitleMovie>
                      </WrapperImage>
                      <WrapperInfo>
                        <TextDetail>{movie.overview}</TextDetail>
                      </WrapperInfo>
                    </WrapperDetail>
                  )
                })
              }
            </WrapperList>
          ) : (
            <TitleText>Cargando...</TitleText>
          )}
        </MainWrapper>
      );
    } else {
      return (
        <TitleText>Peliculas</TitleText>
      )
    }
  }
}
