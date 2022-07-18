import React, { Component, useEffect, useRef, useState } from "react";
import "./card.css"
import { baseUrl }  from "../../utils/fetchApi"
import axios from "axios"
// import { Search } from "@material-ui/icons";
import SingleCard from "./SingleCard"
import { v4 as uuid } from 'uuid';
// import AddIcon from '@material-ui/icons/Add';
// import * as employeeService from "../../services/employeeService";
// import Popup from "../Popup";
// import useTable from "../useTable";
// import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
// import CloseIcon from '@material-ui/icons/Close';
// import Forminput from "../forminput/Forminput";
// import Control from "../Control";
// import { Box, Card, CardContent, Typography, CardActions,  Button, } from "@material-ui/core";
// import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';


export default function AllCards(values){
    
    const unique_id = uuid();
    const url = `${baseUrl}&bath=${values.values.bath}&bed=${values.values.bed}&city=${values.values.city}`

    const[prod,setProd]=useState([])
    useEffect(()=>{
        axios.get(url)
            .then(resp =>{
                setProd(resp.data)
            })
    },[url])

    console.log("AllCards", values)
    const mapping = {
        id:"id",
        one:"price",
        two:"house_size",
        three_one:"bed",
        three_two:"bath",
        four: "full_address",
        one_content:"Price (in USD):",
        show_card_actions:[{
            name:"",
            type:"",
            method:"",
            url:"",
            data:"self"
        }],

        }
        
    const travel = prod.map(item=>{
        return (
            <SingleCard 
                cardid={unique_id} 
                // unikid = (unique_id)
                {...item}

            />  
        )}
    )

    return(
        <div>
            {travel}
        </div>
    )
}
