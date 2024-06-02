import React from 'react';
import {Provider} from 'react-redux';
import {render, screen, fireEvent} from '@testing-library/react-native';
import HomeScreen from '../../../src/screens/Home/HomeScreen';
import {configureStore} from '@reduxjs/toolkit';
import {FETCH_POSTS_SUCCESS} from '../../../src/store/actions/actionTypes';
import {rootReducer} from '../../../src/store/reducers';
import {Navigation} from '../../../src/navigation';
// Mock navigation object
const navigation = {
  navigate: jest.fn(),
};

const store = configureStore({reducer: rootReducer});
describe('HomeScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('renders loading indicator when loading', () => {
    store.dispatch({type: 'FETCH_POSTS'});
    render(
      <Provider store={store}>
        <HomeScreen navigation={navigation} />
      </Provider>,
    );

    const loadingIndicator = screen.getByTestId('loading-indicator');
    expect(loadingIndicator).toBeTruthy();
  });

  test('renders posts when loading is complete', async () => {
    const posts = [
      {id: 1, userId: 1, title: 'Post 1', body: 'Body 1'},
      {id: 2, userId: 2, title: 'Post 2', body: 'Body 2'},
    ];
    store.dispatch({type: FETCH_POSTS_SUCCESS, payload: posts});

    render(
      <Provider store={store}>
        <HomeScreen navigation={navigation} />
      </Provider>,
    );

    const postItems = await screen.findAllByTestId('post-item');
    expect(postItems.length).toBe(posts.length);
  });

  test('navigates to PostDetailsScreen on post press', async () => {
    const posts = [
      {id: 1, userId: 1, title: 'Post 1', body: 'Body 1'},
      {id: 2, userId: 2, title: 'Post 2', body: 'Body 2'},
    ];
    store.dispatch({type: 'FETCH_POSTS_SUCCESS', payload: posts});

    render(
      <Provider store={store}>
        <HomeScreen navigation={navigation} />
      </Provider>,
    );

    const postItem = await screen.findByText('Post 1');
    fireEvent.press(postItem);

    expect(navigation.navigate).toHaveBeenCalledWith(
      Navigation.PostDetailsScreen,
      {
        post: posts[0],
      },
    );
  });
});
