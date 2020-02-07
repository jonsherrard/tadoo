import * as React from 'react';
import { Image, View } from 'react-native';
import { Appbar } from 'react-native-paper';

const AppHeader = function(props) {
  const _goBack = () => console.log('Went back');

  const _handleMore = () => console.log('Shown more');

  return (
    <>
      <Appbar.Header style={{ justifyContent: 'space-between', elevation: 0 }}>
        <Appbar.BackAction onPress={_goBack} style={{ opacity: 0 }} />
        <Image
          style={{ height: 40, width: 160 }}
          source={require('./tadoo-logo-1.png')}
        />
        <Appbar.Action
          icon="dots-vertical"
          onPress={props.navigation.openDrawer}
        />
      </Appbar.Header>
    </>
  );
};

export default AppHeader;
