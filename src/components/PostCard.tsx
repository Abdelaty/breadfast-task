import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Post} from '../models/Posts';

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'grey',
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  postContent: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default PostCard;
