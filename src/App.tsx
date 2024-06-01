import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import SplashScreen from './screens/Splash/SplashScreen';
import HomeScreen from './screens/Home/HomeScreen';
import './i18n';
import PostDetailsScreen from './screens/PostDetails/PostDetails';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from './store/store';
import {Navigation} from './navigation';
import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator();

const App = () => {
  const {t} = useTranslation();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Navigation.SplashScreen}>
          <Stack.Screen
            name={Navigation.SplashScreen}
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={Navigation.HomeScreen}
            component={HomeScreen}
            options={{title: t('Posts')}}
          />
          <Stack.Screen
            name={Navigation.PostDetailsScreen}
            component={PostDetailsScreen}
            options={{title: t('postDetailsTitle')}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
