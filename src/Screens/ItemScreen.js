import React, {useContext, useLayoutEffect} from "react";
import {DataContext} from "../Data/Data";
import {Dimensions, Image, ScrollView, StyleSheet, Text, View,} from "react-native";
import MapView, {Marker} from "react-native-maps";
import {Ionicons} from "@expo/vector-icons";
import {Button} from "native-base";

const styles = StyleSheet.create({
  headerButton: { marginRight: 15 },
  container: { paddingHorizontal: 18 },
  image: { marginTop: 18 },
  infoBar: {
    position: "absolute",
    left: 14,
    bottom: 14,
    alignSelf: "flex-end",
  },
  ratingBar: { flexDirection: "row" },
  text: { marginTop: 8, fontSize: 18, color: "white" },
  star: { marginRight: 5 },
  map: {
    height: 200,
    marginVertical: 18,
  },
  error: { margin: 18 },
});

const ItemScreen = ({ navigation, route }) => {
  const { items, setItems } = useContext(DataContext);
  const { width } = Dimensions.get("window");
  const height = (width / 3) * 4;
  let index = 0;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button transparent style={styles.headerButton} onPress={_delete}>
          <Ionicons name="trash" size={22} />
        </Button>
      ),
    });
  }, []);

  const _delete = () => {
    if (items.length > 0) {
      const temp = items.slice();

      temp.splice(index, 1);
      setItems(temp);

      navigation.navigate("HomeScreen");
    }
  };

  if (route && route.params && route.params.index) {
    index = route.params.index;
  }

  if (items.length > 0) {
    const {
      photo,
      comment,
      rating,
      location: { latitude, longitude },
    } = items[index];

    return (
      <ScrollView style={styles.container}>
        <View>
          <Image source={{ uri: photo }} style={[styles.image, { height }]} />
          <View style={styles.infoBar}>
            <View style={styles.ratingBar}>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <Ionicons
                  key={index}
                  name={`star${item > rating ? "-outline" : ""}`}
                  size={24}
                  color="tomato"
                  style={styles.star}
                />
              ))}
            </View>
            <Text style={styles.text}>{comment}</Text>
          </View>
        </View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }}
        >
          <Marker coordinate={{ latitude, longitude }} />
        </MapView>
      </ScrollView>
    );
  } else {
    return (
      <View>
        <Text style={styles.error}>Keine Daten gefunden.</Text>
      </View>
    );
  }
};

export default ItemScreen;
