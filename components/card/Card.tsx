import React from "react";
import { StyleSheet, Text } from "react-native";

type CardProps = {
  textString: string;
};

const Card = ({ textString }: CardProps) => {
  console.log(textString);
  return (
    <>
      <Text style={styles.thingsILikeALot}>{textString}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  thingsILikeALot: {
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

export default Card;
