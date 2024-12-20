import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  View } from 'react-native';
import Categories from './src/screen/Categories';

import Header from './src/screen/Header';
import Resturant from './src/screen/Resturant';
import Search from './src/screen/Search';

export default function App() {
const [term, setTerm]=useState("burger")
  const commonCategories =[
    {
      name: "burger",
      imageUrl : require("./src/assets/burger.png")
    },
    {
      name: "pizza",
      imageUrl : require("./src/assets/pizza.png")
    },
    {
      name: "desert",
      imageUrl : require("./src/assets/cake.png")
    },
    {
      name: "drinks",
      imageUrl : require("./src/assets/smoothies.png")
    },
    {
      name: "steak",
      imageUrl : require("./src/assets/steak.png")
    },
    {
      name: "pasta",
      imageUrl : require("./src/assets/pasta.png")
    },
  ];
  
  
  return (
    <View >
      <Header/>
      <Search setTerm ={setTerm}/>
     <View style={{margin: 25 }}>
    <Categories 
      Categories ={commonCategories}
      setTerm={setTerm}
      term={term}
    />
    <Resturant/>
     </View>
      
      <StatusBar />
    </View>
  );
}


