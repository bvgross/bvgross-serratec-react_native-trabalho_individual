import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    color: "#ffffff",
    flex: 1,
    alignItems: "center",
  },
  background: {
    position: "absolute",

  },
  backgroundImage: {
    transform: [{ scale: 1.7 }],
    minHeight: "100%",
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  player: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  albumCover: {
    flex: 1,
    maxWidth: "90%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  playerControls: {
    alignItems: "center",
    gap: 1,
    marginBottom: 30,
  },
  musicInfo: {
    alignItems: "center",
    gap: 4,
  },
  row: {
    height: 60,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 500,
  },
  text: {
    color: "#bcbdc1"
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 12,
  },
  icon: {
    width: 40,
    resizeMode: "contain",
  },
  iconSmall: {
    width: 35,
    resizeMode: "contain",
  },
  iconBig: {
    width: 55,
    resizeMode: "contain",
  },
  iconBigInverted: {
    width: 55,
    resizeMode: "contain",
    transform: [{ rotate: "180deg" }]
  },
  timelineRow: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    color: "#fff",
  },
  timeGrabber: {
    position: "absolute",
    height: 22,
    width: 22,
    borderRadius: 50,
    marginHorizontal: 12,
    backgroundColor: "#fff",
    zIndex: 1,
  },
  timeline: {
    height: 4,
    borderRadius: 50,
    backgroundColor: "#4d4c5d",
    flex: 1,
    marginHorizontal: 18,
  }
})
