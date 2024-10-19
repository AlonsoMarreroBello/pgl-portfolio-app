import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import getStyles from "../../styles/styles";

type QRCodeDisplayProps = {
  qrCodeValue: string;
  isDarkTheme: boolean;
};

const QRCodeDisplay = ({ qrCodeValue, isDarkTheme }: QRCodeDisplayProps) => {
  const styles = getStyles(isDarkTheme);
  return (
    <View style={styles.bodyContainer}>
      <View style={styles.qrCodeContainer}>
        <QRCode value={qrCodeValue} />
      </View>
    </View>
  );
};

export default QRCodeDisplay;
