import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  footer: {
    height: 110,
    backgroundColor: "#181818",
    width: "100%",
    paddingHorizontal: 6,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    color: "#fff",
    paddingHorizontal: 6,
  },
  footerPages: {
    flexDirection: "row",
    gap: 22,
  },
  iconImage: {
    width: 50,
    height: 50,
    tintColor: "#737373",
  },
  iconImageSelected: {
    width: 50,
    height: 50,
    tintColor: "#fefefe"
  }
})
