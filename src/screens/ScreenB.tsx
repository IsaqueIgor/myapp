import { ReactNode } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { useScreenGuard } from '../hooks/useScreenGuard';

export function ScreenB() {
  useScreenGuard('screenB');
  return <View style={{ flex: 1, justifyContent:'center' , alignItems:'center' ,backgroundColor: 'white' }}>
    <Text>Tela B</Text>
  </View>;
}
