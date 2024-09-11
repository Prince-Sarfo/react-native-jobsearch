import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

import styles from "./welcome.style";
import { icons } from "../../../constants";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.userName}>Hi, Maximus</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} placeholder="find your dream job"/>
        </View>
          <TouchableOpacity style={styles.searchBtn}>
            <Image source={icons.search} style={styles.searchBtnImage} />
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
