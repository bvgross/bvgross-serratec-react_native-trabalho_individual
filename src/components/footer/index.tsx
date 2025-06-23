import React from 'react';
import { styles } from './styles';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import playlist from '../../assets/icons/playlist.png';
import nowPlaying from '../../assets/icons/nowPlaying.png';
import folder from '../../assets/icons/folders.png';
import album from '../../assets/icons/albums.png';
import artist from '../../assets/icons/artist.png';
import tag from '../../assets/icons/tags.png';
import playlists from '../../assets/icons/allPlaylists.png';
import search from '../../assets/icons/search.png';
import bottomSettings from '../../assets/icons/bottomSettings.png';

interface FooterProps {
  screen: string;
  isNowPlaying: boolean;
}

export const Footer = ({ screen, isNowPlaying }: FooterProps) => {
  return (
    <View style={isNowPlaying ? styles.footerNowPlaying : styles.footer}>
      <View style={styles.footerPagesContainer}>
        <View style={styles.footerPages}>
          <TouchableHighlight
            onPress={() => console.log('Playlist pressed')}
            underlayColor="#555"
            activeOpacity={0.9}
          >
            <View style={screen === "Playlist" ? styles.iconContainerSelected : styles.iconContainer}>
              <Image
                source={playlist}
                style={screen === "Playlist" ? styles.iconImageSelected : styles.iconImage}
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => console.log('Now Playing pressed')}
            underlayColor="#555"
            activeOpacity={0.9}
          >
            <View style={screen === "NowPlaying" ? styles.iconContainerSelected : styles.iconContainer}>
              <Image
                source={nowPlaying}
                style={screen === "NowPlaying" ? styles.iconImageSelected : styles.iconImage}
              />
            </View>
          </TouchableHighlight>

          <View style={styles.iconContainer}>
            <Image source={folder} style={styles.iconImage} />
          </View>
          <View style={styles.iconContainer}>
            <Image source={album} style={styles.iconImage} />
          </View>
          <View style={styles.iconContainer}>
            <Image source={artist} style={styles.iconImage} />
          </View>
          <View style={styles.iconContainer}>
            <Image source={tag} style={styles.iconImage} />
          </View>
          <View style={styles.iconContainer}>
            <Image source={playlists} style={styles.iconImage} />
          </View>
          <View style={styles.iconContainer}>
            <Image source={search} style={styles.iconImage} />
          </View>
        </View>
        <View style={styles.iconContainer}>
          <Image source={bottomSettings} style={styles.iconImage} />
        </View>
      </View>
    </View>
  );
}
