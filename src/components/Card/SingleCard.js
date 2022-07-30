import React, { Component, useEffect, useRef, useState } from "react";

import "./card.css"
import { baseUrl }  from "../../utils/fetchApi"
import axios from "axios"
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
// import * as employeeService from "../../services/employeeService";
import Popup from "../Popup";
import useTable from "../useTable";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Forminput from "../forminput/Forminput";
import Control from "../Control";
import { Box, Card, CardContent, Typography, CardActions,  Button, ListItem, } from "@material-ui/core";
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';

export default function SingleCards(item){
    

    // console.log("item_contents",item_contents)
    const [item_contents, setitemcontents] = useState(item)
    useEffect(()=>{
        console.log(item)
        setitemcontents(item)
        
    },[item])
    const mapping = {
        id:"id",
        one:"price",
        two:"house_size",
        three_one:"bed",
        three_two:"bath",
        four: "full_address",   
        five: "acre_lot",

        one_content:"Price (in USD)",
        two_content:"Size",
        three_one_content:"Bed",
        three_two_content:"Bath",
        four_content: "Address",
        five_content:"Acre",

        show_card_actions:[{
            name:"",
            type:"",
            method:"",
            url:"",
            data:"self"
        }],

        }
    // useEffect(() => { setItem(item_contents) }, [])
    const [recordForEdit, setRecordForEdit] = useState(null)
    
    const [openPopup, setOpenPopup] = useState(false)

    const addOrEdit = (item, resetForm) => {
        // item.preventDefault();
        setRecordForEdit(null)
        setOpenPopup(false)
        console.log("edited card", item)
        setitemcontents(item)
    }

    const onclickdelete = (id)=>{
        
        axios({
          method: 'delete',
          url: 'https://api.ajetavya.com/real_estimate_backend/property?id='+id,
          validateStatus: (status) => { 
            console.log(status)
            // window.location.reload(false);
            setitemcontents(item_contents.id!=id)
          },
        }).catch(error => {
            console.log(error);

        }).then(response => {
            console.log(response);
        });

        console.log("itemmap id", item_contents.id, id, "sirf id", id, item.id )
        
    }
    const openInPopup = item => {
        console.log( "clicked card is" , item);
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    const onclickbuy = ()=>{
        alert("your interest to buy this property has been acknowledged")
    }
    return(
        <div>
            {item_contents[mapping.id] ?<div className = "card"  >
                <img src="https://source.unsplash.com/WLxQvbMyfas"  className ="image" alt=""/>
                <div className="content">
                    <span className ="one"> {mapping.one_content} : ${item_contents[mapping.one]}</span>
                    <span className ="two">{mapping.two_content} : {item_contents[mapping.two]}</span>
                    <span className ="three">{mapping.three_one_content} : {item_contents[mapping.three_one]}- {mapping.three_two}  {item_contents[mapping.three_two]}</span>
                    <span className ="four">{mapping.five_content} : {item_contents[mapping.five]}</span>
                    <span className ="four">{mapping.four_content} : {item_contents[mapping.four]}</span>

                </div>
                <TableCell>
                    <div className="editordelete">
                    <Control color="primary" onClick={() => {openInPopup(item_contents)}}>
                        <EditOutlinedIcon fontSize="small" /> 
                    </Control>
                    <Control color="secondary" onClick={()=>{onclickdelete(item_contents.id)}}>
                        <CloseIcon fontSize="small" />
                    </Control>
                    </div>
                    <button type="submit" className = "card--badge" onClick={()=>{onclickbuy()}}>
                        Buy
                    </button>
                </TableCell>
            </div>: <></>}
            <Popup
                title = "Your Property"
                openPopup = {openPopup}
                setOpenPopup = {setOpenPopup}
            >
                <Forminput
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit}/>
            </Popup>
        </div>
    );
}


