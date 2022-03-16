// React context for storing app datas 
import React, { useState, useEffect } from "react";
import Airtable from "airtable";

export const base = new Airtable({ apiKey: 'keyFC7jLiV3xKlFet' }).base('appi3C5Rp4J0bzJRt');

export const getDataFromAirtable = async () => {
    const response = await fetch('https://api.airtable.com/v0/appi3C5Rp4J0bzJRt/Table%201?api_key=keyFC7jLiV3xKlFet');
    const data = await response.json();
    return data.records;
}

export const patchRecordAirtable = async (recordId, data) => {
    const response = await fetch(`https://api.airtable.com/v0/appi3C5Rp4J0bzJRt/Table%201/${recordId}?api_key=keyFC7jLiV3xKlFet`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const dataResponse = await response.json();
    return dataResponse;
}



export const getNextStepsFromAirtable = async () => {
    const response = await fetch('https://api.airtable.com/v0/appi3C5Rp4J0bzJRt/Table%202?api_key=keyFC7jLiV3xKlFet');
    const data = await response.json();
    return data.records;
}

export const postRecordToAirtable = async (record) => {
    const response = await fetch('https://api.airtable.com/v0/appi3C5Rp4J0bzJRt/Table%202?api_key=keyFC7jLiV3xKlFet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(record)
    });
    const data = await response.json();
    return data;
}

export const getNextSteps = async (recordId) => {
    return base('Table 2').find(recordId, function (err, record) {
        console.log("getNExt", record)
    })
}



export const MyContext = React.createContext();



export const MyProvider = ({ children }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        base('Table 1').select({
            maxRecords: 50,
            view: "Grid view"
        }).eachPage(function page(records, fetchNextPage) {
            setData(records)
        }
        );
    }, [])


    return (
        <MyContext.Provider value={{ data, setData }}>
            {children}
        </MyContext.Provider>
    )
}

