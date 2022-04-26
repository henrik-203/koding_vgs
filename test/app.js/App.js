import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import {AntDesign, Entypo, Ionicons } from '@expo/vector-icons'

const gray = "#91A1BD"

export default function App() {
  const NeuMorph = ({children, size, style}) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View 
          style={[
            styles.inner,
             {width: size || 40, height: size ||40, borderRadius: size /2 || 40 / 2},
            
             ]}
             ></View>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <SafeAreaView style ={{alignSelf: "stretch"}}>
        <View style ={{ marginHorizontal: 32, marginTop: 32}}>
          <View style ={styles.topContainer}>
              <AntDesign name="arrowleft" size={"20"} color={gray} />

          </View>
            <Text style={styles.playing}>PLAYING NOW</Text>
        </View>
      </SafeAreaView>
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE9FD',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
