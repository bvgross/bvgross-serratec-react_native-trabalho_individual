import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    padding: 12,
  },
  cardSection: {
    minWidth: 27,
    minHeight: 27,
  },
  albumImage: {
    height: 47,
    width: 47,
  },
  cardSectionMain: {
    paddingLeft: 6,
    minWidth: 27,
    minHeight: 27,
    flex: 1,
  },
  titulo: {
    fontSize: 14,
    color: "#fff",
  },
  text: {
    fontSize: 10,
    color: "#fff",
  },
  artistaDuracao: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    height: 32,
    width: 32,
  },
})
