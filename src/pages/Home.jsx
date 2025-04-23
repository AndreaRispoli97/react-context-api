import { useEffect, useState } from "react";


const Home = () => {

    useEffect(() => {
        console.log('mount del componente Home');

        return () => {
            console.log('unmount Home')
        }
    }, [])

    return (
        <>
            <div><h1>Home</h1></div>

        </>
    )


}

export default Home