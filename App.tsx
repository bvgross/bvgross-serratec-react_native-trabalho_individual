import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Playlist } from './src/screens/playlists';

export default function App() {
  return (
    <SafeAreaProvider>
      <Playlist />
    </SafeAreaProvider>
  );
}
