import React, { useContext, useLayoutEffect } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { DataContext } from "../Data/Data";
import { Button, Fab, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  headerButton: { marginRight: 15 },
  container: { flex: 1 },
  listItem: { margin: 18, marginBottom: 0 },
  image: { width: "100%" },
  ratingBar: {
    position: "absolute",
    flexDirection: "row",
    left: 14,
    bottom: 14,
    alignSelf: "flex-end",
  },
  star: { marginRight: 5 },
  error: { marginTop: 36, textAlign: "center" },
  fab: { backgroundColor: "tomato" },
});

const HomeScreen = ({ navigation }) => {
  const { setToken, items } = useContext(DataContext);
  const { width } = Dimensions.get("window");
  const height = ((width - 36) / 3) * 4;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button transparent style={styles.headerButton} onPress={signOut}>
          <Ionicons name="log-out-outline" size={24} />
        </Button>
      ),
    });
  }, []);

  const signOut = () => {
    setToken("");
    navigation.navigate("SignInScreen");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {items.length > 0 ? (
          items.map(({ photo, comment, rating, location }, index) => (
            <View
              key={index}
              style={[
                styles.listItem,
                { marginBottom: index === items.length - 1 ? 18 : 0 },
              ]}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("ItemScreen", { index })}
              >
                <Image
                  source={{ uri: photo }}
                  style={[styles.image, { height }]}
                />
              </TouchableOpacity>
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
            </View>
          ))
        ) : (
          <View style={styles.container}>
            <Text style={styles.error}>Keine Einträge gefunden.</Text>
          </View>
        )}
      </ScrollView>
      <Fab
        style={styles.fab}
        position="bottomRight"
        onPress={() => navigation.navigate("CreateScreen")}
      >
        <Icon name="add" />
      </Fab>
    </View>
  );
};

export default HomeScreen;
