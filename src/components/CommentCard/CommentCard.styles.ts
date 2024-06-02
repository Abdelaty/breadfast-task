import {StyleSheet} from 'react-native';

export default StyleSheet.create<any>({
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
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'grey',
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  commentContent: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
