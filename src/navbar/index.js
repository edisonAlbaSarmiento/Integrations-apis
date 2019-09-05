import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Movies from '../screens/Movies';

const MoviesRoute = () => <Movies />;

const ClientRoute = () => <Text>Albums</Text>;

const SettingRoute = () => <Text>Recents</Text>;

const LogoutRoute = () => <Text>logout</Text>

export default class BottomNavigatonComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'state', title: 'Peliculas', icon: 'queue-music', color: '#C62323'},
      { key: 'client', title: 'Proximamente...', icon: 'album' },
      { key: 'setting', title: 'Proximamente...', icon: 'album',color: '#009688' },
      { key: 'logout', title: 'Proximamente...', icon: 'album', color: '#607D8B'},
    ],
  };

  // Vi sao ham 1 tham so => khi goi khong co tham so
  // truyen index vao setState co {} ????
  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    state: MoviesRoute,
    client: ClientRoute,
    setting: SettingRoute,
    logout: LogoutRoute,
  });

  render() {
    return (
      <BottomNavigation style={{
          textAlign:'center',
          color:'Red',
          fontSize:'30dp'
        }}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
