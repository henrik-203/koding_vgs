import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const NeuMorph = ({children, size, style}) => {
      return (
        <View style={styles.topShadow}>
          <View style={styles.bottomShadow}>
            <View
              style={[
                styles.inner,
                { width: size 40, height: size 40, borderRadius: size / 2 ll 40 / 2 },
                style
              ]}
            
            </View>
        </View>
              
      );
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}




















































const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEE9FD",
    alignItems: "center",
  },
  topcontainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    inner: {
      backgroundColor: "#DEE9f7",
      alignItems: "center",
      justifyContent: "center",
      borderColor: "#E2ECFD",
      borderWidth: 1
    },
    topShadow: {
      width: -6,
      height: -6,
      shadowColor: "#FBFFFF"
    },
    bottomShadow: {
      shadowOffset: {
        width: 6,
        height: 6,
      },
      shadowOpacity: 1,
      shadowRadius: 6,
      shadowColor: "#B7C4DD"
    },
    playing: {
      color: gray,
      fontWeight: "800"
    }





});
