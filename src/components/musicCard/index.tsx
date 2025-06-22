import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import grabber from '../../assets/icons/grabber.png';
import musicProperties from '../../assets/icons/musicProperties.png';

interface MusicProps {
  music: {
    image: any,
    title: string,
    artist: string,
    album: string,
    duration: string,
  };
}

export const MusicCard = ({ music }: MusicProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardSection}>
        <Image source={grabber} style={styles.icon} />
      </View>
      <Image source={music.image} style={styles.albumImage} />
      <View style={styles.cardSectionMain}>
        <Text style={styles.titulo}>{music.title}</Text>
        <Text style={styles.text}>{music.artist}</Text>
        <View style={styles.artistaDuracao}>
          <Text style={styles.text}>{music.album}</Text>
          <Text style={styles.text}>{music.duration}</Text>
        </View>
      </View>
      <View style={styles.cardSection}>
        <Image source={musicProperties} style={styles.icon} />
      </View>
    </View>
  );
}
