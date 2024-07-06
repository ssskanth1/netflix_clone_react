import React,{useCallback, useMemo, useState} from "react";

const mycomponent = ()=>{
    const[count,setCount]= useState(0)

    const increment = (()=>{
        const result = useMemo(()=>{
            setCount(count+1)
        })
        return result;
    },[])

    return(
        <div>
            <p>count:{count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}
export default mycomponent


////////////////////////////////
import React,{useCallback, useContext, useMemo, useState} from "react";

const value = React.createContext()

const mycomponent = ()=>{
    const parent = ()=>{
        <mycomponent.Provider>
            <child />
        </mycomponent.Provider>
    }
    const child = ()=>{
        const value2 =  useContext(value)
    }
    const innerchild = ()=>{
        const value3 = useContext(value2)
    }
}
export default mycomponent