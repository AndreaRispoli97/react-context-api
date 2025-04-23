import { useEffect, useState } from "react";

const About = () => {

    useEffect(() => {
        console.log('mount del componente About');

        return () => {
            console.log('unmount About')
        }
    }, [])

    return (
        <>
            <div><h1>About</h1></div>
        </>

    )


}

export default About