import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function Form({addTask}) {
    const [text, setValue] = useState('');

    const onChange = (text) => {
        setValue(text);
    };

  return (
    <View>
        <TextInput style={styles.input} onChangeText={onChange} placeholder='Input information' />
        <Button color='green' onPress={() => addTask(text)} title="Add task" />
    </View>
  );
  }




const styles = StyleSheet.create({    
    input: {
        borderBottomWidth: 1,
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%'        
    }
});
