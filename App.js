import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './colors';

export default function App() {
  const [loaded] = useFonts({
    'Josefin Sans Bold': require('./assets/fonts/JosefinSans-Bold.ttf'),
    'Josefin Sans': require('./assets/fonts/JosefinSans-Regular.ttf'),
  });

  return loaded ? (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style='auto' />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary.black,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontFamily: 'Josefin Sans Bold',
    fontSize: 32,
    textAlign: 'center',
    color: colors.primary.main,
  },
});
