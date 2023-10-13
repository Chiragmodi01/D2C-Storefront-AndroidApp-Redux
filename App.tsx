// /**
//  * @format
//  */

// import React, {useState} from 'react';

// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomePage from './screens/HomePage';
// import StorePage from './screens/StorePage';
// import LoginPage from './screens/LoginPage';

// const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Login"
//           component={LoginPage}
//           options={{title: 'Login'}}
//         />
//         <Stack.Screen
//           name="Home"
//           component={HomePage}
//           options={{
//             title: 'Welcome',
//             header: () => null,
//           }}
//         />
//         <Stack.Screen name="StorePage" component={StorePage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default MyStack;

import React from 'react';
import NavigationProvider from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/store';
import Toast from 'react-native-toast-message';
const App = () => {
  return (
    <StoreProvider store={store}>
      <SafeAreaProvider style={{flex: 1}}>
        <NavigationProvider />
      </SafeAreaProvider>
      <Toast />
    </StoreProvider>
  );
};
export default App;
