import {BASE_URL} from './API/Constants';

const webURLs = {
  postsURL: `${BASE_URL}/posts`,
  postDetailsUrL: (postId: number) => `${BASE_URL}/posts/${postId}/comments`,
};
export default webURLs;
