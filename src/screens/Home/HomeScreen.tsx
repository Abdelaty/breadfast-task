import React, {useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/reducers';
import PostCard from '../../components/PostCard';
import {fetchPosts} from '../../store/actions/postActions';
import styles from './HomeScreen.styles';
import store from '../../store/store';
import {Post} from '../../models/Post';
import {Navigation} from '../../navigation';
const HomeScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();
  const {posts, loading} = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    store.dispatch(fetchPosts());
  }, [dispatch]);

  const handlePress = (post: Post) => {
    navigation.navigate(Navigation.PostDetailsScreen, {post});
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          testID="loading-indicator"
          size="large"
          color="#0000ff"
        />
      ) : (
        <FlatList
          data={posts}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <PostCard
              post={item}
              onPress={() => handlePress(item)}
              testID="post-item"
            />
          )}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

export default HomeScreen;
