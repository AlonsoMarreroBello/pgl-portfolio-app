import { View, Pressable, Button, Text } from "react-native";
import styles from "../../styles/styles";

type HeaderProps = {
  title: string;
  firstButtonTitle: string;
  secondButtonTitle: string;
  handlePress: Function;
};

const Header = ({
  title,
  firstButtonTitle,
  secondButtonTitle,
  handlePress,
}: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.navigationContainer}>
        <Pressable
          style={styles.navigationPressable}
          onPress={() => handlePress()}
        >
          <Text style={styles.navigationPressableText && styles.shadoxBox}>
            {firstButtonTitle}
          </Text>
        </Pressable>
        <Button
          onPress={() => handlePress()}
          title={secondButtonTitle}
          color="light-gray"
          accessibilityLabel="A button for displaying QR code"
        />
      </View>
    </View>
  );
};

export default Header;
