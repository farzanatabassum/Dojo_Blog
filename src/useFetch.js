import { useState,useEffect } from "react";
const useFetch =(url)=>{
const [data,setData]=useState(null);
const [isLoading, setIsLoading]=useState(true);
const [error,setError]=useState(null);
// const [name, setName]=useState('farzana')

// useEffect(()=>{
//     // console.log(name)
// },[name])
useEffect(()=>{
    const abortCont=new AbortController()
    setTimeout(()=>{
        fetch(url ,{signal:abortCont.signal})
    .then(res=>{
        // console.log(res)
        if(!res.ok){
            throw Error("couldn't fetch the data");
        }
        return res.json()})
    .then(data=> {
        setData(data)
        setIsLoading(false)
        setError(null)

    })
    .catch(err=>{
        // console.log(err.message)
        if(err.name==='AbortError'){
            console.log('fetch aborted')
        }
        else{
            setIsLoading(false)

            setError(err.message)

        }
       
    })
    },2000)
    return ()=> {
        abortCont.abort()
        // console.log('fetch')
    }
},[url])
return {data, isLoading,error}
}
export default useFetch