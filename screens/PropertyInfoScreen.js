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
import { MaterialIcons } from "@expo/vector-icons";
import Amenities from "../components/Amenities";

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
  const difference = route.params.oldPrice - route.params.newPrice;
  const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Pressable
            style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}
          >
            {route.params.photos.slice(0, 5).map((photo) => (
              <View style={{ margin: 6 }}>
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
            <Pressable
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Text
                style={{
                  textAlign: "center",
                  marginLeft: 20,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Show More
              </Text>
            </Pressable>
          </Pressable>

          <View
            style={{
              marginHorizontal: 12,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 19, fontWeight: "bold" }}>
                {route.params.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 7,
                }}
              >
                <MaterialIcons name="stars" size={24} color="green" />
                <Text>{route.params.rating}</Text>
                <View
                  style={{
                    // backgroundColor: "#6CB4EE",
                    backgroundColor: "#003580",
                    paddingVertical: 3,
                    borderRadius: 5,
                    width: 100,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    Genius Level
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#178169",
                paddingHorizontal: 6,
                paddingVertical: 4,
                borderRadius: 6,
              }}
            >
              <Text style={{ color: "white", fontSize: 13 }}>
                Travel sustainable
              </Text>
            </View>
          </View>

          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
          <Text
            style={{
              marginTop: 10,
              fontSize: 15,
              fontWeight: "500",
              marginHorizontal: 12,
            }}
          >
            Price for 1 Night and {route.params.adults} adults
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 12,
              marginTop: 4,
              gap: 8,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 18,
                textDecorationLine: "line-through",
              }}
            >
              {route.params.oldPrice * route.params.adults}
            </Text>

            <Text style={{ fontSize: 20 }}>
              R$ {route.params.newPrice * route.params.adults}
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 12,
              marginTop: 4,
              backgroundColor: "green",
              paddingHorizontal: 4,
              paddingVertical: 5,
              borderRadius: 4,
              width: 75,
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              {offerPrice.toFixed(0)} % OFF
            </Text>
          </View>

          {/* Separação */}
          <Text
            style={{
              // borderColor: "#E0E",
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
          <View
            style={{
              margin: 12,
              flexDirection: "row",
              alignItems: "center",
              gap: 60,
            }}
          >
            {/* check in and check out */}
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}
              >
                Check In
              </Text>
              <Text
                style={{ fontSize: 14, fontWeight: "bold", color: "#007fff" }}
              >
                {route.params.selectedDates.startDate}
              </Text>
            </View>
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}
              >
                Check Out
              </Text>
              <Text
                style={{ fontSize: 14, fontWeight: "bold", color: "#007fff" }}
              >
                {route.params.selectedDates.endDate}
              </Text>
            </View>
          </View>

          {/* Rooms and Guests */}
          <View style={{ margin: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
              Rooms and Guests
            </Text>

            <Text
              style={{ fontSize: 14, fontWeight: "bold", color: "#007fff" }}
            >
              {route.params.rooms} rooms {route.params.adults} adults{" "}
              {route.params.children} children
            </Text>
          </View>

          {/* Separação */}
          <Text
            style={{
              // borderColor: "#E0E",
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />

          <Amenities />

          {/* Separação */}
          <Text
            style={{
              // borderColor: "#E0E",
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 60,
            }}
          />
        </ScrollView>
      </SafeAreaView>

    {/* Esse botão nos envia para RoomsScreen */}
      <Pressable
      // um evento onPress
      onPress={() => navigation.navigate("Rooms", {
        rooms:route.params.availableRooms,
        oldPrice:route.params.oldPrice,
        newPrice:route.params.newPrice,
        name:route.params.name,
        children:route.params.children,
        adults:route.params.adults,
        rating:route.params.rating,
        startDate:route.params.selectedDates.startDate,
        endDate:route.params.selectedDates.endDate,
      })}
        style={{
          backgroundColor: "#6CB4EE",
          position: "absolute",
          bottom: 18,
          padding: 15,
          width: "95%",
          marginHorizontal: 10,
          borderRadius: 18,
        }}
      >
        {/* Ate aqui tudo mais ou menos 3:14:28 */}
        <Text style={{ textAlign: "center", color: "white",fontSize: 17, fontWeight:"bold" }}>
          Select Availability
        </Text>
      </Pressable>
    </>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({});
