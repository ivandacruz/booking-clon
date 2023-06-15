import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { pixelNormalize } from "../components/Normalise";

const PropertyInfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        flexDirection: "row",
        color: "gold",
        textAlign: "center",
        width: 320,
      },
      headerStyle: {
        backgroundColor: "#003579",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Pressable style={{flexDirection:"row", flexWrap:"wrap",margin:10}}>
          {route.params.photos.slice(0, 5).map((photo) => (
            <View style={{margin:6}}>
              <Image
                style={{
                  width: 120,
                  height: pixelNormalize(80),
                  borderRadius: pixelNormalize(4),
                }}
                source={{ uri: photo.image }}
              />
            </View>
          ))}
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({});
