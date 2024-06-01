import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import styles from './SplashScreen.styles';
import {Navigation} from '../../navigation';
const SplashScreen = ({navigation}: {navigation: any}) => {
  const {t} = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(Navigation.HomeScreen);
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('splashText')}</Text>
    </View>
  );
};

export default SplashScreen;
