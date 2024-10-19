import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";

export const RandomQuote = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://quote-generator-api-six.vercel.app/api/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error while fetching quote", error);
        setQuote("Con paciencia y saliva ...");
        setLoading(false);
      });
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
      <Text>Frase del dia</Text>
      {loading ? <ActivityIndicator size="small" /> : <Text>{quote}</Text>}
    </View>
  );
};
