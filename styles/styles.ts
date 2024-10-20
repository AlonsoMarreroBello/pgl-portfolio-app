import { StyleSheet } from "react-native";

const lightTheme = {
  background: "#fff",
  primaryText: "#000000",
  secondaryText: "#333333",
  buttonColor: "#007BFF",
  borderColor: "#CCCCCC",
  shadowColor: "#E0E0E0",
  transparent: "rgba(0, 0, 0, 0.6)",
};

const darkTheme = {
  background: "rgba(0,0,0,0.8)",
  primaryText: "#FFFFFF",
  secondaryText: "#B0B0B0",
  buttonColor: "#BB86FC",
  borderColor: "#424242",
  shadowColor: "#1F1F1F",
  transparent: "rgba(255, 255, 255, 0.6)",
};

const getStyles = (isDarkTheme: boolean) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkTheme
        ? darkTheme.background
        : lightTheme.background,
    },
    bodyContainer: {
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      height: "90%",
    },
    qrCodeContainer: {
      justifyContent: "center",
      width: "100%",
      height: "100%",
      alignItems: "center",
    },
    shadoxBox: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,

      elevation: 15,
    },
    floatingButton: {
      position: "absolute",
      bottom: 20,
      right: 20,
      backgroundColor: isDarkTheme
        ? darkTheme.transparent
        : lightTheme.transparent,
      borderRadius: 30,
      padding: 15,
    },
  });
};

export default getStyles;
