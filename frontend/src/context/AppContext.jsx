import { createContext } from "react";
import { doctors } from "../assets/assets";

// 1. Create the context
export const AppContext = createContext(null);

// 2. Create the provider component
const AppContextProvider = (props) => {

    // You defined your data object with the name 'contextValue'
    const contextValue = {
        doctors
    };

    return (

        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;