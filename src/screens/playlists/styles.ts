import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    color: "#ffffff",
    flex: 1,
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
  },
  textBold: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: 500,
  },
  header: {
    backgroundColor: "#000000",
    width: "100%",
    padding: 6,
    borderBottomColor: "#424242",
    borderBottomWidth: 1,
  },
  scrollView: {
    flex: 1,
  },
  musicas: {
    paddingVertical: 10,
  },
  iconImageTop: {
    height: 50,
    width: 50,
    marginLeft: 15,
  },
  iconImage: {
    height: 40,
    width: 40,
  },
  searchBar: {
    borderTopColor: "#181818",
    borderTopWidth: 2,
    height: 60,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 25,
  },
  searchText: {
    paddingHorizontal: 25,
    width: "100%",
    fontSize: 20,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  dropdown: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#424242",
    borderWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  dropdownText: {
    fontSize: 20,
    fontWeight: 500,
    color: "#fff",
  },
  iconDropdown: {
    width: 50,
    height: 50,
  },
  listSize: {
    alignItems: "center",
    width: 300,
  },
})
