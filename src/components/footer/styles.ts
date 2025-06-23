import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  footer: {
    borderTopColor: "#181818",
    borderTopWidth: 2,
    height: 85,
    backgroundColor: "#181818",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerNowPlaying: {
    borderTopColor: "#737373",
    borderTopWidth: 2,
    height: 85,
    backgroundColor: "transparent",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    color: "#fff",
    paddingHorizontal: 4,
  },
  footerPagesContainer: {
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    justifyContent: "space-between",
  },
  footerPages: {
    flexDirection: "row",
  },
  iconImage: {
    borderTopColor: "#f9f9f9",
    width: 35,
    height: 35,
    tintColor: "#737373",
  },
  iconImageSelected: {
    width: 35,
    height: 35,
    tintColor: "#fefefe"
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 57,
    paddingHorizontal: 6,
  },
  iconContainerSelected: {
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "#62fb9c",
    borderTopWidth: 2,
    marginTop: -2,
    zIndex: 1,
    height: 57,
    paddingHorizontal: 6,
  },
  iconImageConfig: {
    padding: 6,
  },
})
