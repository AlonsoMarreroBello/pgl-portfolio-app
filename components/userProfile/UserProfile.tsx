import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import getStyles from "../../styles/styles";
import Card from "../card/Card";
import RandomQuote from "../randomQuote/RandomQuote";

type UserProfileProps = {
  avatar: ImageSourcePropType;
  description: string;
  favouriteThings: string[];
  isDarkTheme: boolean;
};

const UserProfile = ({
  avatar,
  description,
  favouriteThings,
  isDarkTheme,
}: UserProfileProps) => {
  const styles = getStyles(isDarkTheme);
  const internalStyles = getInternalStyles(isDarkTheme);
  return (
    <View style={styles.bodyContainer}>
      <View>
        <View style={internalStyles.userDataContainer}>
          <Image style={internalStyles.userAvatar} source={avatar} />
          <View style={internalStyles.descriptionBox}>
            <Text style={internalStyles.descriptionTitle}>
              Descripción sobre mí!
            </Text>
            <Text>{description}</Text>
          </View>
        </View>
        <RandomQuote isDarkTheme={isDarkTheme} />
        <Text style={internalStyles.favoriteThingsTitle}>
          cosas que me gustan mucho:
        </Text>
        <ScrollView style={internalStyles.favouriteThingScrollView}>
          {favouriteThings.map((thing, index) => (
            <Card
              key={index}
              textString={thing}
              style={internalStyles.favoriteThingsText}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const getInternalStyles = (isDarkTheme: boolean) =>
  StyleSheet.create({
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
      backgroundColor: isDarkTheme ? "darkgray" : "lightgray",
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
      color: isDarkTheme ? "white" : "black",
      fontWeight: "900",
      textTransform: "capitalize",
      fontSize: 20,
      textAlign: "center",
    },
    favouriteThingScrollView: {
      padding: 10,
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
      backgroundColor: isDarkTheme ? "darkgray" : "lightgray",
    },
  });

export default UserProfile;
