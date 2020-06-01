import React, { Component} from 'react';
import 'react-native-gesture-handler';
//import { createStackNavigator } from 'react-navigation';
//import { createAppContainer } from 'react-navigation';
import Login from './src/modules/login/containers/login'
import Registro from './src/modules/login/containers/registro'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




function App() {
  const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// const LoginNavigator = createStackNavigator({
//   Login: { 
//     screen: Login,
//     navigationOptions: {
//       title: 'Notas'
//     }
//   }, 
//   Registro: {
//     screen: Registro,
//     navigationOptions: {
//       title: 'Registro_Notas'
//     }
//   }
// }, {headerLayautPreset: 'center'});



// export default LoginNavigator(LoginNavigator)

