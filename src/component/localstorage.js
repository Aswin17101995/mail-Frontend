import { useState } from "react";
export default function Local(initialvalue){
    const [val,setval] = useState(initialvalue)
    
    function handleChange(e)
    {
        setval(e.target.value)
    }

    return{
        val,
        onChange : handleChange
    }
}