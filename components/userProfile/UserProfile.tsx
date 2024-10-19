import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import styles from "../../styles/styles";
import Card from "../card/Card";

type UserProfileProps = {
  avatar: ImageSourcePropType;
  description: string;
  favouriteThings: string[];
};

const UserProfile = ({
  avatar,
  description,
  favouriteThings,
}: UserProfileProps) => {
  return (
    <View style={styles.bodyContainer}>
      <View>
        <View style={InternalStyles.userDataContainer}>
          <Image style={InternalStyles.userAvatar} source={avatar} />
          <View style={InternalStyles.descriptionBox}>
            <Text style={InternalStyles.descriptionTitle}>
              Descripción sobre mí!
            </Text>
            <Text>
              {/* Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
              prácticas para mis queridos alumnos */}
              {description}
            </Text>
          </View>
        </View>
        <Text style={InternalStyles.favoriteThingsTitle}>
          cosas que me gustan mucho:
        </Text>
        <ScrollView style={{ padding: 10 }}>
          {favouriteThings.map((thing, index) => (
            <Card
              key={index}
              textString={thing}
              style={InternalStyles.favoriteThingsText}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const InternalStyles = StyleSheet.create({
  userDataContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userAvatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  descriptionBox: {
    margin: 10,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  descriptionTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  favoriteThingsTitle: {
    color: "beriblak",
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
  favoriteThingsText: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "silver",
  },
});

export default UserProfile;
