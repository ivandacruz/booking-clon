import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
          backgroundColor: "#003579",
          // backgroundColor: "#003580", a cor nosso header 
          height: 65,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
    >
        
      {/* vamos parametrar nossos icones e nossos textos */}
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderColor: "gold",
            borderWidth: 1,
            borderRadius: 25,
            padding: 5,
          }}
        >
          <Ionicons name="bed-outline" size={24} color="gold" />
          <Text
            style={{
              marginLeft: 8,
              fontWeight: "bold",
              color: "gold",
              fontSize: 15,
            }}
          >
            Stays
          </Text>
        </Pressable>
        <Pressable
            style={{
            flexDirection: "row",
            alignItems: "center",
            
            }}
        >
            <Ionicons name="ios-airplane-outline" size={24} color="gold" />
            <Text
            style={{
                marginLeft: 8,
                fontWeight: "bold",
                color: "gold",
                fontSize: 15,
            }}
            >
            Flights
            </Text>
        </Pressable>
        <Pressable
            style={{
            flexDirection: "row",
            alignItems: "center",
            
            }}
        >
            <Ionicons name="car-outline" size={24} color="gold" />
            <Text
            style={{
                marginLeft: 8,
                fontWeight: "bold",
                color: "gold",
                fontSize: 15,
            }}
            >
            Car rental
            </Text>
        </Pressable>
        <Pressable
            style={{
                flexDirection: "row",
                alignItems: "center",
                
            }}
        >
            <FontAwesome5 name="uber" size={24} color="gold" />
            <Text
            style={{
                marginLeft: 8,
                fontWeight: "bold",
                color: "gold",
                fontSize: 15,
            }}
            >
            Taxi
            </Text>
        </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
