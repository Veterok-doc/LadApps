import React from "react";
import { StyleSheet, View, Text } from "react-native";


export default function Header() {


  return (
    <View style = {styles.main}>
      <Text style = {styles.text}>Список Дел</Text>
    </View>
  );
}




const styles = StyleSheet.create({
    main: {
        paddingTop: 60,
        height: 100,
        backgroundColor: '#FFF8DC'
    },
    text: {
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});