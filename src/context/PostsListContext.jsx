import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'


const ListContext = createContext()

function ListProvider({ children }) {

    const [data, setData] = useState([])

    function arrayData() {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                alert(err)
            })
    }

    useEffect((arrayData), [])

    return (
        <ListContext.Provider value={{ data }}>
            {children}
        </ListContext.Provider>
    )

}

function useList() {
    const context = useContext(ListContext)
    return context
}

export { ListProvider, useList }