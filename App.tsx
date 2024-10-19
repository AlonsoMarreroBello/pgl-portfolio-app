import { useState } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { thingsILikeALot } from "./data/thingsILikeALot/thingsILikeALot";
import styles from "./styles/styles";
import UserProfile from "./components/userProfile/UserProfile";
import QRCodeDisplay from "./components/qrCodeDisplay/QRCodeDisplay";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>My Portfolio App</Text>
        <View style={styles.navigationContainer}>
          <Pressable
            style={styles.navigationPressable}
            onPress={() => setDisplayMyQR(true)}
          >
            <Text style={styles.navigationPressableText && styles.shadoxBox}>
              Mi info
            </Text>
          </Pressable>
          <Button
            onPress={() => setDisplayMyQR(false)}
            title="Mi Repo"
            color="light-gray"
            accessibilityLabel="Un botón pal QR"
          />
        </View>
      </View>
      {displayMyQR ? (
        <UserProfile
          avatar={require("./assets/SofyanAmrabat.jpg")}
          description="Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
              prácticas para mis queridos alumnos"
          favouriteThings={thingsILikeALot}
        />
      ) : (
        <QRCodeDisplay qrCodeValue="https://github.com/adhernea" />
      )}
    </View>
  );
}
