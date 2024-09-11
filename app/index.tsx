import { useState } from "react";
import { View, Text, SafeAreaView, Dimensions } from "react-native";
import { Stack, useRouter } from "expo-router";

import { images, COLORS, FONT, SIZES, icons } from "../constants";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import { ScrollView } from "react-native";
import Nearbyjobs from '../components/home/nearby/Nearbyjobs';
import Popularjobs from '../components/home/popular/Popularjobs';
import Welcome from '../components/home/welcome/Welcome';

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              handlePress={() => {}}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimension="100%"
              handlePress={() => {}}
            />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView>
        <Welcome />
        <Popularjobs/>
        <Nearbyjobs/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
