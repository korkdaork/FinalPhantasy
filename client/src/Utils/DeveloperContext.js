import React, {useContext} from "react";


const DeveloperContext = React.createContext({
gil: 500,
hp: 5,
attack: 5,
defense: 5,
speed: 5,
potion: 1
});

export default DeveloperContext;