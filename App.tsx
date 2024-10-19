import { useState } from "react";
import { View } from "react-native";
import { thingsILikeALot } from "./data/thingsILikeALot/thingsILikeALot";
import styles from "./styles/styles";
import UserProfile from "./components/userProfile/UserProfile";
import QRCodeDisplay from "./components/qrCodeDisplay/QRCodeDisplay";
import Header from "./components/header/Header";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const handleDisplayQR = (): void => {
    setDisplayMyQR(!displayMyQR);
  };
  return (
    <View style={styles.container}>
      <Header
        title="My Portfolio App"
        firstButtonTitle="My info"
        secondButtonTitle="My repo"
        handlePress={handleDisplayQR}
      />
      {displayMyQR ? (
        <UserProfile
          avatar={require("./assets/avatar.png")}
          description="Soy un estudiante de segundo de DAM (desarollo de aplicaciones multiplataforma) que odia a uno de sus profesores porque a veces le gusta enredar las practicas, porque el pelo no puede."
          favouriteThings={thingsILikeALot}
        />
      ) : (
        <QRCodeDisplay qrCodeValue="https://github.com/AlonsoMarreroBello" />
      )}
    </View>
  );
}
