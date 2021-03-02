import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { DataContext } from "../Data/Data";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, Toast } from "native-base";
import * as Location from "expo-location";

const styles = StyleSheet.create({
  headerButton: { marginRight: 15 },
  container: { marginBottom: 10 },
  panel: {
    flex: 1,
    marginTop: 18,
    marginHorizontal: 18,
    marginBottom: 10,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  image: { flex: 1 },
  button: {
    position: "absolute",
    width: 50,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
    color: "white",
  },
  wrapper: {
    paddingRight: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: { flex: 1, marginVertical: 8, marginHorizontal: 18, fontSize: 16 },
});

const CreateScreen = ({ navigation, route }) => {
  const { items, setItems } = useContext(DataContext);
  const { width } = Dimensions.get("window");
  const height = ((width - 36) / 3) * 4;

  const [photo, setPhoto] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const [location, setLocation] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button transparent style={styles.headerButton} onPress={save}>
          <Ionicons name="save" size={24} />
        </Button>
      ),
    });
  }, [photo, comment, rating, location]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        alert("Permission to access location was denied.");
        setLocation({ coords: { latitude: 0, longitude: 0 } });

        return;
      }

      setLocation(await Location.getCurrentPositionAsync({}));
    })();
  }, []);

  const save = () => {
    const isEmpty = (input) => !input || input.trim() === "";

    if (isEmpty(photo)) {
      Toast.show({ text: "Bitte füge ein Foto hinzu.", duration: 2000 });
      return;
    }

    if (isEmpty(comment)) {
      Toast.show({ text: "Bitte füge einen Kommentar hinzu.", duration: 2000 });
      return;
    }

    if (isEmpty(rating.toString())) {
      Toast.show({ text: "Bitte füge eine Bewertung hinzu.", duration: 2000 });
      return;
    }

    const { min, max } = Math;
    const {
      coords: { latitude, longitude },
    } = location;

    setItems([
      ...items,
      {
        photo,
        comment,
        rating: min(max(Number.parseFloat(rating), 1), 5),
        location: { latitude, longitude },
      },
    ]);

    navigation.navigate("HomeScreen");
  };

  if (route && route.params && route.params.photo) {
    const newPhoto = route.params.photo;

    if (newPhoto !== photo) {
      setPhoto(newPhoto);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.panel, { height }]}>
        {photo !== "" && <Image source={{ uri: photo }} style={styles.image} />}
        <Button
          style={styles.button}
          rounded
          onPress={() => navigation.navigate("CameraScreen")}
        >
          <Ionicons name="camera" size={22} color="white" />
        </Button>
      </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Kommentar"
          value={comment}
          onChangeText={setComment}
          style={styles.textInput}
        />
        <Ionicons name="chatbox-outline" size={22} color="tomato" />
      </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Bewertung (1-5)"
          value={rating}
          onChangeText={setRating}
          keyboardType="numeric"
          style={styles.textInput}
        />
        <Ionicons name="star" size={22} color="tomato" />
      </View>
    </ScrollView>
  );
};

export default CreateScreen;
