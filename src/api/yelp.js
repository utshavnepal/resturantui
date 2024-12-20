import axios from "axios";
 export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    Headers:{
        Authorization: "FVd5F1OQMYl-fCO8N1gfB-pfcTLNVCbTOG0zpEdisy5udhhRxej4DHpPdkDgWwKcIMvxAJU-7xinz9gCtG0aJTR294hO3vA9HSuh2PlAiRhB-kw8ku55k4YqD6uDYnYx"

    },
});