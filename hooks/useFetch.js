import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import axios from 'axios'

const useFetch = () => {
    const [data,setData]=useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError]=useState(null)
    const fetchData= async ()=>{
        setIsLoading(true)

        try{
           const response=await axios.get("http://10.0.2.2:8000/api/products")
           console.log(response.data)
           setData(response.data)
           setIsLoading(false)
        }catch(error){
            // setIsLoading(false)
            console.log(error.message)
          setError(error)
        }finally{
            
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    const refetch=()=>{
        setIsLoading(true)
        fetchData()
    }
  return {data,isLoading,error,refetch}
}

export default useFetch

const styles = StyleSheet.create({})