import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 48,
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    flex: 1,
    height: 56,
    borderRadius: 5,
    padding: 16,
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 16,
    marginRight: 12,
  },
  button: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#31CF67',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  listEmptyText: {
    fontSize: 14,
    color: '#FFF',
    textAlign: 'center',
    paddingHorizontal: 15,
  },
});
