import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Playlist } from './src/screens/playlists';
import { NowPlaying } from './src/screens/nowPlaying';

export default function App() {
  // return (
  //   <SafeAreaProvider>
  //     <Playlist />
  //   </SafeAreaProvider>
  // );
  return (
    <SafeAreaProvider>
      <NowPlaying />
    </SafeAreaProvider>
  );
}
