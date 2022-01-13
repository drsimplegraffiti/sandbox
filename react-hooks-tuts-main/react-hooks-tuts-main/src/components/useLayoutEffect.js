import React,{useLayoutEffect, useEffect, useRef} from 'react'

const LayoutEffect = () => {
    const inputRef = useRef(null)
    useLayoutEffect(()=>{
        console.log(inputRef.current.value)
    }, [])

    useEffect(()=>{
        inputRef.current.value = "Hello there"
    }, [])
    return <div>
        <input ref={inputRef} value="pedro" style={{width:400, height:100}} />
    </div>;
}
 
export default LayoutEffect;