import React, {useState} from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

export default function App() {

const [list, setList] = useState ([
  {text: 'Jogging', key: '1'},
  {text: 'Jogging with dog', key:'2'},
])

const addTask = (text) => {
  setList((list) => {
    return [
      {text: text, key: Math.random().toString(30).substring(7)},
      ... list
    ]
  })
}

const deleteTask = (key) => {
  setList((list) => {
    return list.filter(ListItem => ListItem.key != key)
  })
}


  return (
    <View>
      <Header />
      <Form addTask={addTask} />
      <View>
        <FlatList data={list} renderItem={({ item }) => (
          <ListItem el={item} deleteTask={deleteTask}/>
        )} />
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  
  
});