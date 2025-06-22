import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    color: "#ffffff",
    flex: 1,
  },
  text: {
    color: "#ffffff",
    fontSize: 12,
  },
  textBold: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: 500,
  },
  header: {
    paddingTop: 13,
    backgroundColor: "#000000",
    width: "100%",
    padding: 4,
    borderBottomColor: "#424242",
    borderBottomWidth: 1,
  },
  music: {
    flex: 1,
  },
  iconImageTop: {
    height: 35,
    width: 35,
    marginLeft: 10,
  },
  iconImage: {
    height: 28,
    width: 28,
  },
  searchBar: {
    borderTopColor: "#181818",
    borderTopWidth: 2,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 18,
  },
  searchText: {
    paddingHorizontal: 18,
    width: "100%",
    fontSize: 14,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  dropdown: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#424242",
    borderWidth: 2,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  dropdownText: {
    fontSize: 14,
    fontWeight: 500,
    color: "#fff",
  },
  iconDropdown: {
    width: 35,
    height: 35,
  },
  listSize: {
    alignItems: "center",
    width: 200,
  },
  iconOptions: {
    width: 35,
    height: 35,
    transform: [{ rotate: '90deg' }],
  },
})
