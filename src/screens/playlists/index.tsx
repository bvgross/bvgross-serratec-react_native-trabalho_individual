import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Footer } from '../../components/footer';
import search from '../../assets/icons/search.png';
import close from '../../assets/icons/close.png';
import dropdowmIcon from '../../assets/icons/dropdown.png';
import pause from '../../assets/icons/pause.png';
import order from '../../assets/icons/order.png';
import save from '../../assets/icons/save.png';
import options from '../../assets/icons/bottomSettings.png';
import { MusicCard } from '../../components/musicCard';
import { music } from './music';

export const Playlist = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>13. RetroSynth</Text>
            <Image source={dropdowmIcon} style={styles.iconDropdown} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={close} style={styles.iconImageTop} />
          </TouchableOpacity>
        </View>

        <View style={styles.headerRow}>
          <TouchableOpacity>
            <Image source={pause} style={styles.iconDropdown} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={order} style={styles.iconDropdown} />
          </TouchableOpacity>
          <View style={styles.listSize}>
            <Text style={styles.text}><Text style={styles.textBold}>38</Text> / 74</Text>
            <Text style={styles.text}>⏲ 5:28:07</Text>
          </View>
          <TouchableOpacity>
            <Image source={save} style={styles.iconDropdown} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={options} style={styles.iconOptions} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={music}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <MusicCard music={item} />
          );
        }}
        style={styles.music}
        showsVerticalScrollIndicator={true}
      />
      <View style={styles.searchBar}>
        <Image source={search} style={styles.iconImage} />
        <TextInput
          placeholder='Pesquise nesta fila...'
          placeholderTextColor={'#b8b8b8'}
          style={styles.searchText}
        />
      </View>
      <Footer screen="Playlist" />
    </View>
  );
}
