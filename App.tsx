import { useEffect, useState } from "react";
import { TouchableOpacity, View, StatusBar } from "react-native";
import { thingsILikeALot } from "./data/thingsILikeALot/thingsILikeALot";
import getStyles from "./styles/styles";
import UserProfile from "./components/userProfile/UserProfile";
import QRCodeDisplay from "./components/qrCodeDisplay/QRCodeDisplay";
import Header from "./components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [styles, setStyles] = useState(getStyles(isDarkTheme));

  useEffect(() => {
    setStyles(getStyles(isDarkTheme));
  }, [isDarkTheme]);

  const handleDisplayQR = (): void => {
    setDisplayMyQR(true);
  };

  const handleHideQR = (): void => {
    setDisplayMyQR(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Header
        title="My Portfolio App"
        firstButtonTitle="My info"
        secondButtonTitle="My repo"
        handleDisplayQR={handleDisplayQR}
        handleHideQR={handleHideQR}
        isDarkTheme={isDarkTheme}
      />
      {displayMyQR ? (
        <UserProfile
          avatar={require("./assets/avatar.png")}
          description="Soy un estudiante de segundo de DAM (desarollo de aplicaciones multiplataforma) que odia a uno de sus profesores porque a veces le gusta enredar las practicas, porque el pelo no puede."
          favouriteThings={thingsILikeALot}
          isDarkTheme={isDarkTheme}
        />
      ) : (
        <QRCodeDisplay
          qrCodeValue="https://github.com/AlonsoMarreroBello"
          isDarkTheme={isDarkTheme}
        />
      )}
      <TouchableOpacity style={styles.floatingButton} onPress={toggleTheme}>
        <FontAwesomeIcon
          style={{ color: isDarkTheme ? "black" : "white" }}
          icon={isDarkTheme ? faSun : faMoon}
        />
      </TouchableOpacity>
    </View>
  );
}
