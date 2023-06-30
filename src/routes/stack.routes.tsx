import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name='screenA'
        component={ScreenA}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name='screenB'
        component={ScreenB}
        options={{
          title: 'Tela B',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#FFF',
        }}
      />
    </Navigator>
  );
}
