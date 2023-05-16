import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { updatePostbackConversionValue } from "expo-skadnetwork";
import { useEffect } from "react";

export default function App() {
  const [postback, setPostback] = useState(false);

  useEffect(() => {
    updatePostbackConversionValue(0)
      .catch((err) => {})
      .finally(() => setPostback(true));
  }, []);

  return (
    <View style={styles.container}>
      <Text>{!postback ? "Updating Conversion" : "Conversion Updated"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
