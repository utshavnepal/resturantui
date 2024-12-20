import { useState } from "react";
import {View, TextInput, Text, StyleSheet} from "react-native";
import { FontAwesome} from "@expo/vector-icons";
import { elevation} from "../Common/styles";
export default function Search ({setTerm}){
    const [input, setInput] = useState("")
    const handleEditing = ()=>{
        if(!input) return
        setTerm(input)
        setInput("")
    }
    return(
       <View style={[styles.container, styles.elevation]}>
       <FontAwesome name="search" size={25}/>
      
        <TextInput style={styles.input}
            placeholder="resturant,food"
            value={input}
            onChangeText={(text)=> {setInput(text)}}
            onEndEditing={handleEditing}

        />
       </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        marginTop: 5,
        marginHorizontal: 25,
        backgroundColor:"white",
     
        padding: 15,
        borderRadius: 40,
    },
    elevation,
    input:{
        shadowColor: "black",
        shadowOffset: {width: 5, height: 5},
        elevation: 3,
        shadowOpacity: 0.1,
    },
});