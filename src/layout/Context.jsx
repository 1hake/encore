// React context for storing app datas 
import React, { useState, useEffect } from "react";

export const getDataFromAirtable = async () => {
    const response = await fetch('https://api.airtable.com/v0/appi3C5Rp4J0bzJRt/Table%201?api_key=keyFC7jLiV3xKlFet');
    const data = await response.json();
    return data.records;
}

export const MyContext = React.createContext();

export const MyProvider = ({ children }) => {
    const [data, setData] = useState([])


    useEffect(() => {
        getDataFromAirtable().then(data => {
            console.log('here', data);
            setData(data)
        });
    }, []);

    return (
        <MyContext.Provider value={{ data, setData }}>
            {children}
        </MyContext.Provider>
    )
}

