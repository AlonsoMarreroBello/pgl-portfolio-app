import React from "react";
import { Text } from "react-native";

type CardProps = {
  textString: string;
};

const Card = ({ textString }: CardProps) => {
  console.log(textString);
  return (
    <>
      <Text>{textString}</Text>
    </>
  );
};

/* const Card = ({ title, body, imgSource }: CardProps) => {
  return (
    <View>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Image style={styles.img} source={imgSource} />
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <Text style={styles.cardBody}>{body}</Text>
      </View>
    </View>
  );
};
 */
const style = {
  text: {
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
};

export default Card;
