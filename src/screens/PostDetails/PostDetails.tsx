import React, {useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/reducers';
import CommentCard from '../../components/CommentCard';
import {fetchComments} from '../../store/actions/commentActions';
import styles from './PostDetails.styles';
import store from '../../store/store';
import {Post} from '../../models/Post';
const PostDetailsScreen = () => {
  const route = useRoute();
  const post: Post = route?.params?.post ?? {};
  const dispatch = useDispatch();
  const {comments, loading} = useSelector((state: RootState) => state.comments);

  useEffect(() => {
    store.dispatch(fetchComments(post.id));
  }, [dispatch, post.id]);

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <Text style={styles.userName}>User {post.userId}</Text>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.content}>{post.body}</Text>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={comments}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CommentCard comment={item} />}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

export default PostDetailsScreen;
