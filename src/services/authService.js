import AsyncStorage from '@react-native-async-storage/async-storage';
const logIn = async user => {
  console.log('user info', user);
  const {username, password} = user;

  if (username.toUpperCase() === 'RAM' && password === 'retailpulse') {
    AsyncStorage.setItem('user', JSON.stringify(user));
    return {
      status: 'success',
      message: 'You are redirecting to home page',
      user: username,
    };
  }
  if (username.toUpperCase() === 'SHYAM' && password === 'retailpulse') {
    AsyncStorage.setItem('user', JSON.stringify(user));
    return {
      status: 'success',
      message: 'You are redirecting to home page',
      user: username,
    };
  }
};
const logOut = async () => {
  AsyncStorage.clear();
  return {
    status: 'success',
    message: 'You are logged out',
  };
};
export default {
  logIn,
  logOut,
};
