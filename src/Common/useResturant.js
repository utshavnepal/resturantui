import { useState } from "react";
import yelp from "../api/yelp";
export default ()=> {
             const [result, setResults] = useState({
             data: null,
             loading: false,
             error: null
         })
        const searchResturants = async (term) =>{
            setResults({
                data: null,
                loading: true,
                error: null

            });
           
            
            try{ const response = await yelp.get('/search', {
                params:{
                    limit: 15,
                    term,
                    location: "Toronto",
                },});
                setResults({
                    data: response.data.businesses,
                    loading: false,
                    error: null
    
                })

            }
            catch(error){
                setResults({
                    data: null,
                    loading: false,
                    error: "something wrong"
    
                });
            }
        };
        return [result, searchResturants];

}