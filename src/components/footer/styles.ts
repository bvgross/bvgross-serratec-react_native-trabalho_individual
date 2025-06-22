import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  footer: {
    height: 85,
    backgroundColor: "#181818",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    color: "#fff",
    paddingHorizontal: 4,
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
    borderTopColor: "#181818",
    borderTopWidth: 3,
    height: 57,
    paddingHorizontal: 6,
  },
  iconContainerSelected: {
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "#62fb9c",
    borderTopWidth: 3,
    height: 57,
    paddingHorizontal: 6,
  },
  iconImageConfig: {
    padding: 6,
  },
})
