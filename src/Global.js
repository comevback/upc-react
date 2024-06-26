import { createContext, useState } from 'react';

// Get data
const INITIAL_API_URL = process.env.REACT_APP_INITIAL_API_URL || 'https://xuxiang.art/app'; // replace with your backend URL
const INITIAL_API_NAME = process.env.REACT_APP_INITIAL_API_NAME || 'API Service'; // replace with your backend name
const INITIAL_CENTRAL_SERVER_URL = process.env.REACT_APP_INITIAL_CENTRAL_SERVER_URL || 'https://xuxiang.art/regi'; // replace with your central register server URL

const defaultValue = {
    API_URL: INITIAL_API_URL,
    setAPI_URL: () => {},
    API_NAME: INITIAL_API_NAME,
    setAPI_NAME: () => {},
    CENTRAL_SERVER_URL: INITIAL_CENTRAL_SERVER_URL,
    setCENTRAL_SERVER_URL: () => {},
};

// Create a context
export const ParaContext = createContext(defaultValue);

export const ParaProvider = ({ children }) => {
    const [apiUrl, setAPI_URL] = useState(INITIAL_API_URL);
    const [apiName, setAPI_NAME] = useState(INITIAL_API_NAME);
    const [centralServerUrl, setCENTRAL_SERVER_URL] = useState(INITIAL_CENTRAL_SERVER_URL);

    return (
        <ParaContext.Provider value={{
            API_URL: apiUrl, 
            setAPI_URL, 
            API_NAME: apiName,
            setAPI_NAME,
            CENTRAL_SERVER_URL: centralServerUrl, 
            setCENTRAL_SERVER_URL, 
        }}>
            {children}
        </ParaContext.Provider>
    );
};
