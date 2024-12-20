import { FlatList } from "react-native";
import CategoryItem from "./CategoryItem";
export default function Categories({Categories, setTerm, term}){
    return(
        <FlatList data={Categories} 
        renderItem={({item, index})=>{
          return(
        <CategoryItem
         name={item.name} 
         imageUrl={item.imageUrl} index={index}
          active={item.name === term}
          handlePress={()=> setTerm(item.name)}
        />)}}
         horizontal
         showsHorizontalScrollIndicator={false}
         keyExtractor={(Category)=> Category.name}
          />
    )
}