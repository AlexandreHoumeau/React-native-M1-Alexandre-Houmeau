import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';
import Exo1 from '../exos/Exo1';
import Exo2 from '../exos/Exo2';
import Exo3 from '../exos/Exo3';
import Exo4 from '../exos/Exo4';
import Exo5 from '../exos/Exo5';
import Exo6 from '../exos/Exo6';
import Exo7 from '../exos/Exo7';
import Exo9 from '../exos/Exo9';
import Exo8 from '../exos/Exo8';
import Exo10 from '../exos/Exo10';
import Exo11 from '../exos/Exo11';
import Exo12 from '../exos/Exo12';
const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={Exo1} name="Exo1" />
      <Stack.Screen component={Exo2} name="Exo2" />
      <Stack.Screen component={Exo3} name="Exo3" />
      <Stack.Screen component={Exo4} name="Exo4" />
      <Stack.Screen component={Exo5} name="Exo5" />
      <Stack.Screen component={Exo6} name="Exo6" />
      <Stack.Screen component={Exo7} name="Exo7" />
      <Stack.Screen component={Exo8} name="Exo8" />
      <Stack.Screen component={Exo9} name="Exo9" />
      <Stack.Screen component={Exo10} name="Exo10" />
      <Stack.Screen component={Exo11} name="Exo11" />
      <Stack.Screen component={Exo12} name="Exo12" />
    </Stack.Navigator>
  );
}
