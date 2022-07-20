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
import axios from "axios";


export default function Search()  {  

    let[location,setlocation]=useState();
    let [values,setValues]=useState(
        {
            city:'',
            bed:'',
            bath:''
        });
    const changelocation = changedlocation=>{
        axios({
            method: 'get',
            url: "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude="+lat+"&longitude="+long+"&localityLanguage=en",
            
          }).catch(error => {
              console.log(error);
              
          }).then(response => {
              console.log(response.data.locality);
              setValues({
                city:response.data.locality,
                bed:'',
                bath:''
            });
            setlocation(response.data.locality);
          });
          
      return 
    }
    
    const [lat,setLat]= useState('');
    const [long,setLong]= useState('');
    

    navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    
      
      
   
        
    
    const changeValues = valuesNew =>{ setValues(valuesNew);}
    useEffect(()=>{
        changelocation();
    },[])
    return(
        <div >
            <Topbar  values={values} handleKeyPressloc={changeValues} />
            <div className="searchContainer">
                <Sidebar values={values} handleValues={changeValues} />
                <section > 
                    <AllCards values={values}/>
                </section>    
            </div>
        </div>
    );
} 

