import { createContext, useState } from "react"

export const DataContext = createContext(null);

const DataProvider = (props)=>{

    const [accountInfo,setAccountInfo] =useState('')

    return (
        <DataContext.Provider value={{
            accountInfo,
            setAccountInfo
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;