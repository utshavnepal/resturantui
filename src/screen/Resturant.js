import { View, Text, StyleSheet } from "react-native";
import useResturant from "../Common/useResturant";

export default function Resturant(){
    const[{data, loading, error}, searchResturants] = useResturant()   
    return(
        <View style={styles.container}>
            <Text style={styles.header} > Top Resturant</Text>
        </View>
    );
}
const styles = StyleSheet.create(
    {
        container:{
            marginHorizontal:25,
            marginVertical: 15,
            flex: 1,
        },
        header:{
            fontWeight: "bold",
            fontSize: 20,
            paddingBottom: 10,
            height: 10,
        }
    }
)