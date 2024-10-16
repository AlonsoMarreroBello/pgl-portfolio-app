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
import Card from "./components/card/Card";
import styles from "./styles/styles";

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
        <View style={styles.bodyContainer}>
          <View>
            <View style={styles.userDataContainer}>
              <Image
                style={styles.userAvatar}
                source={require("./assets/SofyanAmrabat.jpg")}
              ></Image>
              <View style={styles.descriptionBox}>
                <Text style={styles.descriptionTitle}>
                  Descripción sobre mí!
                </Text>
                <Text>
                  Soy profe y me gusta mi trabajo aunque a veces me de por
                  enrevesar prácticas para mis queridos alumnos
                </Text>
              </View>
            </View>
            <Text style={styles.favoriteThingsTitle}>
              cosas que me gustan mucho:
            </Text>
            <ScrollView style={{ padding: 10 }}>
              {thingsILikeALot.map((thing, index) => (
                <Card
                  key={index}
                  textString={thing}
                  style={styles.favoriteThingsText}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      ) : (
        <View style={styles.bodyContainer}>
          <View style={styles.qrCodeContainer}>
            <QRCode value="https://github.com/adhernea" />
          </View>
        </View>
      )}
    </View>
  );
}
