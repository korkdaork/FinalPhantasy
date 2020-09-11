import React from "react";
import Stores from "../Components/Stores"

function Store({buyPotion}){

console.log(buyPotion);
    return(
        <Stores buyPotion={buyPotion}/>
    );
}

export default Store;