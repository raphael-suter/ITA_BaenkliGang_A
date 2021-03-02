import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  panel: { flex: 1, justifyContent: "center" },
  error: { margin: 18 },
  overlay: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});

const CameraScreen = ({ navigation }) => {
  let camera = null;

  const { width } = Dimensions.get("window");
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const { uri } = await camera.takePictureAsync();
      navigation.navigate("CreateScreen", { photo: uri });
    }
  };

  if (hasPermission === null || hasPermission === false) {
    return <Text style={styles.error}>No access to camera.</Text>;
  }

  return (
    <View style={styles.panel}>
      <Camera
        style={{ height: (width / 3) * 4 }}
        ratio="3:4"
        ref={(r) => {
          camera = r;
        }}
      >
        <View style={styles.overlay}>
          <TouchableOpacity onPress={takePicture}>
            <Ionicons name="radio-button-on-outline" color="white" size={80} />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraScreen;
