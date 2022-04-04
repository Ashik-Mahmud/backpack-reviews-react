import axios from "axios";
import { useEffect, useState } from "react";

const useData = () =>{
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('data.json').then((response)=>{
            setData(response.data)
        })
    }, [])

    return [data, setData];
}

export default useData;