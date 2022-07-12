import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Card from "../../components/Card/Card";
// import FilterBar from "../..components/sidebar/FilterBar"

import React, { Component, useEffect, useState } from "react";
import {BsFilter} from "react-icons/bs"
import Searchfilters from "../../components/Card/Searchfilters"
import "./search.css"
import data from "./data"
import { Flex, Box, Text, Icon } from '@chakra-ui/react';


export default function Search()  {  
    
    let [values,setValues]=useState({city:'Petersburgh',
        bed:2,
        bath:1});
    console.log(values);
    const changeValues = valuesNew =>{
        console.log("new values = ",valuesNew)
        setValues(valuesNew);
        console.log(values);
    }
    // changeValues({bed:3,bath:3,city:"Petersburgh"})
    // let city='Petersburgh'
    // let bath=1
    // let bed =2

    // const [authors, setAuthors] = useState([])
    // useEffect(()=>{
    //     const fetchData = async() =>{
    //         const result = await fetch(`https://api.ajetavya.com/real_estimate_backend/properties/by?bath=${bath}&bed=${bed}&city=${city}`)
            
    //         const jsonResult = await result.json()
    //         // console.log(jsonResult[0])
    //         // setAuthors(jsonResult)
    //         setAuthors(jsonResult)
    //     }
    //     fetchData()

    // },[])

    // const mapping = {
    //     id:"id",
    //     one:"price",
    //     two:"house_size",
    //     three_one:"bed",
    //     three_two:"bath",
    //     four: "full_address",
    //     one_content:"Price (in USD):"
    // }

    
    // const travel = authors.map(item=>{
        
    //     return (
            
    //         <Card mapping={mapping}
    //             key={item[mapping.id]}
    //             one = {item[mapping.one]}
    //             two = {item[mapping.two]}
    //             three_one = {item[mapping.three_one]}
    //             three_two = {item[mapping.three_two]}
    //             four = {item[mapping.four]}
    //         />
            
    //     );
        
    //   })    
    // const [searchfilters, setSearchfilters] = useState(false)
    return(
        <div >
            <Topbar />
            <div className="homeContainer">
                <Sidebar values={values} handleValues={changeValues} />

                <section > 
                    <Card values={values} />
                    {/* <Searchfilters/>
                    {travel} */}
                </section>
                
            </div>
        </div>
    );
} 

