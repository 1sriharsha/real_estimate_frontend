import React, { Component, useEffect, useState } from "react";
import "./card.css"
import { baseUrl }  from "../../utils/fetchApi"
import axios from "axios"
// import Sidebar from "../sidebar/Sidebar";
export default function Card(values){

    const url = `${baseUrl}&bath=${values.values.bath}&bed=${values.values.bed}&city=${values.values.city}`
    const[prod,setProd]=useState([])
    useEffect(()=>{
        axios.get(url)
            .then(resp =>{
                setProd(resp.data)
            })
    },[url])


    console.log("from card",values.values)
    // const [vals, seturl] = useState(values)

    // const [authors, setAuthors] = useState([])
    // useEffect(()=>{
    //     const fetchData = async() =>{
    //         console.log(`${baseUrl}&bath=${values.values.bath}&bed=${values.values.bed}&city=${values.values.city}`)
    //         const result = await fetch(`${baseUrl}&bath=${values.values.bath}&bed=${values.values.bed}&city=${values.values.city}`)
    //         const jsonResult = await result.json()
    //         setAuthors(jsonResult)    
    //     }
    //     fetchData()
    // },[])


    const mapping = {
        id:"id",
        one:"price",
        two:"house_size",
        three_one:"bed",
        three_two:"bath",
        four: "full_address",
        one_content:"Price (in USD):"
    }

    return(
        <div>
            {prod.map(item => (
                <div className = "card">
                    <img src="https://source.unsplash.com/WLxQvbMyfas"  className ="image" alt=""/>
                    <div className="content">
                        <span className ="one"> {mapping.one_content} : ${item[mapping.one]}</span>
                        <span className ="two">{mapping.two} : {item[mapping.two]}</span>
                        <span className ="three">{mapping.three_one} : {item[mapping.three_one]}- {mapping.three_two}  {item[mapping.three_two]}</span>
                        <span className ="four">{mapping.four} : {item[mapping.four]}</span>
                    </div>
                </div>
            ))};
        </div>
    );
}
