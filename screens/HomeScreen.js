import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
  } from "react-native";
  import React, { useLayoutEffect, useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  import { Ionicons } from "@expo/vector-icons";
  import { Feather } from "@expo/vector-icons";
  import Header from "../components/Header";
  import DatePicker from "@sabroso/react-native-date-range-picker";
  import Modal, {
    BottomModal,
    ModalButton,
    ModalContent,
    ModalFooter,
    ModalTitle,
    SlideAnimation,
  } from "react-native-modals";
  
  // Até aqui tranquilo 30:22 funcionando bem
  
  const HomeScreen = () => {
    const navigation = useNavigation();
    const [selectedDates, setSelectedDates] = useState();
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [modalVisibile, setModalVisibile] = useState(false);
  
    console.log(selectedDates);
  
    useLayoutEffect(() => {
      navigation.setOptions({
        // styling the header
        headerShown: true,
        // title: "Ivan.com",
        title: "Booking.com",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
          flexDirection: "row",
          // color: "#00CED1",
          color: "gold",
          textAlign: "center",
          width: 320,
        },
        headerStyle: {
          backgroundColor: "#003579",
          // backgroundColor: "#003580",
          height: 110,
          borderBottomColor: "transparent",
          shadowColor: "transparent",
        },
        headerRight: () => (
          <Ionicons
            name="notifications-outline"
            size={24}
            color="gold"
            style={{ marginRight: 12 }}
          />
        ),
      });
    }, []);
  
    const customButton = (onConfirm) => {
      return (
        <Button
          onPress={onConfirm}
          style={{
            container: { width: "80%", marginHorizontal: "3%" },
            text: { fontSize: 20 },
          }}
          primary
          title="submit"
        />
      );
    };
  
    return (
      <>
        <View>
          <Header />
  
          <ScrollView>
            <View
              style={{
                margin: 20,
                borderColor: "gold",
                borderWidth: 3,
                borderRadius: 6,
              }}
            >
              {/* Destination */}
              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  paddingHorizontal: 10,
                  borderColor: "gold",
                  borderWidth: 2,
                  paddingVertical: 15,
                }}
              >
                <Feather name="search" size={24} color="black" />
                <TextInput
                  placeholderTextColor={"black"}
                  placeholder="Escolha seu Destino"
                />
                {/* <TextInput placeholder='Enter your Destination' /> */}
              </Pressable>
  
              {/* Selected Dates */}
              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  paddingHorizontal: 10,
                  borderColor: "gold",
                  borderWidth: 2,
                  paddingVertical: 15,
                }}
              >
                <Feather name="calendar" size={24} color="black" />
  
                <DatePicker
                  style={{
                    width: 270,
                    height: 47,
                    borderRadius: 0,
                    borderWidth: 0,
                    borderColor: "transparent",
                  }}
                  customStyles={{
                    placeholderText: {
                      fontSize: 20,
                      flexDirection: "row",
                      alignItems: "center",
                      marginRight: "auto",
                    },
                    headerStyle: {
                      backgroundColor: "#003579",
                    },
                    contentText: {
                      fontSize: 14,
                      flexDirection: "row",
                      alignItems: "center",
                      marginRight: "auto",
                    },
                  }}
                  selectBgColor="#0047AB"
                  customButton={(onConfirm) => customButton(onConfirm)}
                  onConfirm={(startDate, endDate) =>
                    setSelectedDates(startDate, endDate)
                  }
                  allowFontScaling={false}
                  placeholder={"02 Mai , 2023  -> 30 Mai, 2023"}
                  mode={"range"}
                />
              </Pressable>
  
              {/* Rooms and Guests */}
              <Pressable
                onPress={() => setModalVisibile(!modalVisibile)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  paddingHorizontal: 10,
                  borderColor: "gold",
                  borderWidth: 2,
                  paddingVertical: 15,
                }}
              >
                <Ionicons name="person-outline" size={24} color="black" />
                <TextInput
                  placeholderTextColor={"red"}
                  placeholder="1 room * 2 adults * 0 Children"
                />
              </Pressable>
  
              {/* Search Button */}
              <Pressable
                style={{
                  paddingHorizontal: 10,
                  backgroundColor: "#2a52be",
                  borderColor: "gold",
                  borderWidth: 2,
                  paddingVertical: 15,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 17,
                    fontWeight: "500",
                    color: "white",
                  }}
                >
                  Search
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
  
        {/* Modal -> App.js*/}
        <BottomModal
          swiperThreshold={200}
          onBackdropPress={() => setModalVisibile(!modalVisibile)}
          swipeDirection={["up", "down"]}
          footer={
            <ModalFooter>
              <ModalButton
                text="Apply"
                style={{
                  marginBottom: 20,
                  color: "white",
                  backgroundColor: "#003579",
                }}
                onPress={() => setModalVisibile(!modalVisibile)}
              />
            </ModalFooter>
          }
          modalTitle={<ModalTitle title="Select rooms and guest" />}
          modalAnimation={
            new SlideAnimation({
              slideFrom: "bottom",
            })
          }
          onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
          visible={modalVisibile}
          onTouchOutside={() => setModalVisibile(!modalVisibile)}
        >
          <ModalContent style={{ width: "100%", height: 310 }}>
            {/* Rooms */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>Quartos</Text>
  
              <Pressable
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Pressable
                  onPress={() => setRooms(Math.max(1, rooms - 1))}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 19,
                      fontWeight: "700",
                      paddingHorizontal: 6,
                    }}
                  >
                    -
                  </Text>
                </Pressable>
  
                <Pressable>
                  <Text>{rooms}</Text>
                </Pressable>
  
                <Pressable
                  onPress={() => setRooms((c) => c + 1)}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 18,
                      fontWeight: "600",
                      paddingHorizontal: 6,
                    }}
                  >
                    +
                  </Text>
                </Pressable>
              </Pressable>
            </View>
  
            {/* Adults */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>Adultos</Text>
  
              <Pressable
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Pressable
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 19,
                      fontWeight: "700",
                      paddingHorizontal: 6,
                    }}
                  >
                    -
                  </Text>
                </Pressable>
  
                <Pressable>
                  <Text>{adults}</Text>
                </Pressable>
  
                <Pressable
                  onPress={() => setRooms((c) => c + 1)}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 18,
                      fontWeight: "600",
                      paddingHorizontal: 6,
                    }}
                  >
                    +
                  </Text>
                </Pressable>
              </Pressable>
            </View>
  
            {/* childrens */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>Crianças</Text>
  
              <Pressable
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Pressable
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 19,
                      fontWeight: "700",
                      paddingHorizontal: 6,
                    }}
                  >
                    -
                  </Text>
                </Pressable>
  
                <Pressable>
                  <Text>{children}</Text>
                </Pressable>
  
                <Pressable
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 18,
                      fontWeight: "600",
                      paddingHorizontal: 6,
                    }}
                  >
                    +
                  </Text>
                </Pressable>
              </Pressable>
            </View>
          </ModalContent>
        </BottomModal>
      </>
    );
  };
  
  export default HomeScreen;
  
  const styles = StyleSheet.create({});
  