import React from 'react';
import { styles } from './styles';
import { Image, Text, View } from 'react-native';
import playlist from '../../assets/icons/playlist.png';
import nowPlaying from '../../assets/icons/nowPlaying.png';
import folder from '../../assets/icons/folders.png';
import album from '../../assets/icons/albums.png';
import artist from '../../assets/icons/artist.png';
import tag from '../../assets/icons/tags.png';
import playlists from '../../assets/icons/allPlaylists.png';
import search from '../../assets/icons/search.png';
import bottomSettings from '../../assets/icons/bottomSettings.png';

export const Footer = () => {

  interface icons {
    name: string,
    image: any,
  }

  return (
    <View style={styles.footer}>
      <View style={styles.footerPages}>
        <Image source={playlist} style={styles.iconImage} />
        <Image source={nowPlaying} style={styles.iconImage} />
        <Image source={folder} style={styles.iconImage} />
        <Image source={album} style={styles.iconImage} />
        <Image source={artist} style={styles.iconImage} />
        <Image source={tag} style={styles.iconImage} />
        <Image source={playlists} style={styles.iconImage} />
        <Image source={search} style={styles.iconImage} />
      </View>
      <Image source={bottomSettings} style={styles.iconImage} />
    </View>
  );
}
