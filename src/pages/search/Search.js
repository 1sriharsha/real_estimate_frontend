import Topbar from "../../components/topbar/Topbar";
// import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar";
import SingleCard from "../../components/Card/SingleCard";
// import FilterBar from "../..components/sidebar/FilterBar"
import AllCards from"../../components/Card/AllCards"
import React, { Component, useEffect, useState } from "react";
import {BsFilter} from "react-icons/bs"
import Searchfilters from "../../components/Card/Searchfilters"
import "./search.css"
import data from "./data"
import { Flex, Box, Text, Icon } from '@chakra-ui/react';


export default function Search()  {  

    let[location,setlocation]=useState('Southwick')

    const changelocation = changedlocation=>{
        setlocation(changedlocation)
    }
    
    let [values,setValues]=useState(
        {
            city:'',
            bed:'',
            bath:''
        });

    const changeValues = valuesNew =>{ setValues(valuesNew);}
    
    return(
        <div >
            <Topbar values={values} handleKeyPressloc={changeValues} />
            <div className="searchContainer">
                <Sidebar values={values} handleValues={changeValues} />
                <section > 
                    <AllCards values={values}/>
                </section>    
            </div>
        </div>
    );
} 

