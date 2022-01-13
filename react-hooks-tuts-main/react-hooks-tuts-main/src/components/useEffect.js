import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react/cjs/react.development'

const EffectTut = () => {
    const [data, setData]= useState('')

    useEffect(async () => {
       try {
        const result = await axios.get("https://jsonplaceholder.typicode.com/comments")
        console.log(result.data)
        setData(result.data[0].email)
       } catch (error) {
           console.error(error.message)
       }
    },[])

    return (
        <h1>Hello {data}</h1>
    );
}

export default EffectTut;