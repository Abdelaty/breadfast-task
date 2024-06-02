import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './PostCard.styles';
import {Post} from '../../models/Post';
interface Props {
  post: Post;
  onPress: () => void;
  testID: string;
}

const PostCard: React.FC<Props> = ({post, onPress, testID}) => (
  <TouchableOpacity style={styles.container} onPress={onPress} testID={testID}>
    <Image source={{uri: post?.userAvatar}} style={styles.avatar} />
    <View style={styles.content}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.postContent}>{post.body}</Text>
    </View>
  </TouchableOpacity>
);
export default PostCard;
