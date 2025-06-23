import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Footer } from '../../components/footer';
import { music } from '../playlists/music';
import { useEffect, useState } from 'react';
import favorite from '../../assets/icons/favorite.png';
import info from '../../assets/icons/info.png';
import addToPlaylist from '../../assets/icons/addToPlaylist.png';
import musicSettings from '../../assets/icons/musicProperties.png';
import repeat from '../../assets/icons/repeat.png';
import shuffle from '../../assets/icons/shuffle.png';
import volume from '../../assets/icons/volume.png';
import equalizer from '../../assets/icons/equilizer.png';
import pause from '../../assets/icons/pauseGrande.png';
import next from '../../assets/icons/next.png';

export const NowPlaying = () => {

  const [musicIndex, setMusicIndex] = useState(0);
  const [musicPlaying, setMusicPlaying] = useState(music[musicIndex]);

  const nextMusic = () => {
    if (musicIndex < music.length - 1) {
      setMusicIndex(musicIndex + 1);
    } else if (musicIndex === music.length - 1) {
      setMusicIndex(0);
    } else {
      console.log("música inexistente");
      return;
    }
  };

  const previousMusic = () => {
    if (musicIndex > 0) {
      setMusicIndex(musicIndex - 1);
    } else if (musicIndex === 0) {
      setMusicIndex(music.length - 1);
    } else {
      console.log("música inexistente");
      return;
    }
  };

  useEffect(() => {
    setMusicPlaying(music[musicIndex]);
  }, [musicIndex]);


  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={musicPlaying.image} blurRadius={50} style={styles.backgroundImage} />
        <View style={styles.darkOverlay}></View>
      </View>
      <View style={styles.player}>
        <Image source={musicPlaying.image} style={styles.albumCover} />
        <View style={styles.playerControls}>
          <View style={styles.musicInfo}>
            <Text style={styles.textTitle}>{musicPlaying.title}</Text>
            <Text style={styles.text}>{musicPlaying.artist}</Text>
            <Text style={styles.text}>{musicPlaying.album}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.iconsContainer}>
              <Image source={favorite} style={styles.icon} />
              <Image source={info} style={styles.icon} />
              <Image source={addToPlaylist} style={styles.icon} />
              <Image source={musicSettings} style={styles.icon} />
            </View>
            <View style={styles.iconsContainer}>
              <Image source={repeat} style={styles.icon} />
              <Image source={shuffle} style={styles.icon} />
            </View>
          </View>
          <View style={styles.timelineRow}>
            <Text style={styles.time}>0:00</Text>
            <View style={styles.row}>
              <View style={styles.timeGrabber}></View>
              <View style={styles.timeline}></View>
            </View>
            <Text style={styles.time}>{musicPlaying.duration}</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity>
              <Image source={volume} style={styles.iconSmall} />
            </TouchableOpacity>
            <TouchableOpacity onPress={previousMusic}>
              <Image source={next} style={styles.iconBig} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={pause} style={styles.iconBig} />
            </TouchableOpacity>
            <TouchableOpacity onPress={nextMusic}>
              <Image source={next} style={styles.iconBigInverted} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={equalizer} style={styles.iconSmall} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer screen="NowPlaying" isNowPlaying={true} />
    </View>
  );
}
