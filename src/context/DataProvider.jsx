import { createContext, useState, useEffect } from "react"
import { getDataFirebase } from "../functions/getDataFirebase"

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getDataFirebase()
            .then((response) => {
                setData(response);
            })
            .catch((error) => console.log("Error al conetar con la base de datos", error))
            .finally(() => setLoading(false))
    }, []);


    return (
        <DataContext.Provider value={{ data, loading }}>
            {children}
        </DataContext.Provider>
    )
}
