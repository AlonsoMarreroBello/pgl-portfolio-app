import { View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import styles from "../../styles/styles";

type QRCodeDisplayProps = {
  qrCodeValue: string;
};

const QRCodeDisplay = ({ qrCodeValue }: QRCodeDisplayProps) => {
  return (
    <View style={styles.bodyContainer}>
      <View style={styles.qrCodeContainer}>
        <QRCode value={qrCodeValue} />
      </View>
    </View>
  );
};

export default QRCodeDisplay;
