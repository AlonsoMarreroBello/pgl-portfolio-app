import { View, Pressable, Button, Text, StyleSheet } from "react-native";
import getStyles from "../../styles/styles";

type HeaderProps = {
  title: string;
  firstButtonTitle: string;
  secondButtonTitle: string;
  handleDisplayQR: Function;
  handleHideQR: Function;
  isDarkTheme: boolean;
};

const Header = ({
  title,
  firstButtonTitle,
  secondButtonTitle,
  handleDisplayQR,
  handleHideQR,
  isDarkTheme,
}: HeaderProps) => {
  const styles = getStyles(isDarkTheme);
  const insternalStyles = getInternalStyles(isDarkTheme);
  return (
    <View style={insternalStyles.headerContainer}>
      <Text style={insternalStyles.headerTitle}>{title}</Text>
      <View style={insternalStyles.navigationContainer}>
        <Pressable
          style={insternalStyles.navigationPressable}
          onPress={() => handleDisplayQR()}
        >
          <Text
            style={insternalStyles.navigationPressableText && styles.shadoxBox}
          >
            {firstButtonTitle}
          </Text>
        </Pressable>
        <Button
          onPress={() => handleHideQR()}
          title={secondButtonTitle}
          color="light-gray"
          accessibilityLabel="A button for displaying QR code"
        />
      </View>
    </View>
  );
};

const getInternalStyles = (isDarkTheme: boolean) =>
  StyleSheet.create({
    headerContainer: {
      width: "100%",
    },
    headerTitle: {
      backgroundColor: "gray",
      textAlign: "center",
      fontWeight: "bold",
      textAlignVertical: "center",
      fontSize: 30,
    },
    navigationContainer: {
      flexDirection: "row",
      backgroundColor: "darkgray",
      justifyContent: "center",
      alignItems: "center",
    },
    navigationPressable: {
      width: "50%",
    },
    navigationPressableText: {
      color: "white",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  });

export default Header;
