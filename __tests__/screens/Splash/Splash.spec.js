import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import SplashScreen from '../../../src/screens/Splash/SplashScreen';
import {Navigation} from '../../../src/navigation';

const navigation = {
  navigate: jest.fn(),
  replace: jest.fn(),
};

jest.useFakeTimers();

describe('SplashScreen', () => {
  it('renders splash text correctly', () => {
    const {getByText} = render(<SplashScreen navigation={navigation} />);

    expect(getByText('splashText')).toBeTruthy();
  });

  it('navigates to HomeScreen after timeout', async () => {
    render(<SplashScreen navigation={navigation} />);

    jest.advanceTimersByTime(2000);

    await waitFor(() => {
      expect(navigation.replace).toHaveBeenCalledWith(Navigation.HomeScreen);
    });
  });
});
