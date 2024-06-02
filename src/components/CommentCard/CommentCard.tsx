import React from 'react';
import {View, Text, Image} from 'react-native';
import {Comment} from '../../models/Comments';
import styles from './CommentCard.styles';
interface Props {
  comment: Comment;
}

const CommentCard: React.FC<Props> = ({comment}) => (
  <View style={styles.container}>
    <Image source={{uri: comment?.userAvatar}} style={styles.avatar} />
    <View style={styles.content}>
      <Text style={styles.userName}>{comment.name}</Text>
      <Text style={styles.commentContent}>{comment.body}</Text>
    </View>
  </View>
);

export default CommentCard;
