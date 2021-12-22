import React, { useContext, useState } from "react";

let UserContext =React.createContext();

export default UserContext;

export const UserProvider =({children})=>{
    let [su,ssu] = useState("")
    return <UserContext.Provider value={{su,ssu}}>{children}</UserContext.Provider>
}