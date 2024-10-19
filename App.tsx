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
          avatar={require("./assets/SofyanAmrabat.jpg")}
          description="Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar prácticas para mis queridos alumnos"
          favouriteThings={thingsILikeALot}
        />
      ) : (
        <QRCodeDisplay qrCodeValue="https://github.com/adhernea" />
      )}
    </View>
  );
}
