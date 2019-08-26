import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import News from '../screens/News';

const StateRoute = () => <News/>;

const ClientRoute = () => <Text>Albums</Text>;

const SettingRoute = () => <Text>Recents</Text>;

const LogoutRoute = () => <Text>logout</Text>

export default class BottomNavigatonComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'state', title: 'Noticias', icon: 'queue-music' },
      { key: 'client', title: 'Client', icon: 'album' },
      { key: 'setting', title: 'Setting', icon: 'album' },
      { key: 'logout', title: 'Logout', icon: 'album' },
    ],
  };

  // Vi sao ham 1 tham so => khi goi khong co tham so
  // truyen index vao setState co {} ????
  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    state: StateRoute,
    client: ClientRoute,
    setting: SettingRoute,
    logout: LogoutRoute,
  });

  render() {
    return (
      <BottomNavigation style={{
          textAlign:'center',
          backgroundColor:'Red',
          fontSize:'30dp'
        }}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}