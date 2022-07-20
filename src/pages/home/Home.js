
import React, { Component, useEffect, useState } from "react";
import "./home.css"
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "../../components/Popup";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Button from "../../components/Button"

import Forminput from "../../components/forminput/Forminput";


export default function Home(){
  

  const [openPopup, setOpenPopup] = useState(false)
  const [recordForEdit, setRecordForEdit] = useState(null)

  const addOrEdit = () => {
    setRecordForEdit(null)
    setOpenPopup(false)
}
  <Button type="submit" text="Submit" />

  return(
    // <Forminput/>
    <React.Fragment>
      <div className="homeContainer" >
        {/* <button onClick={ () => setOpenPopup(true) }>Sell a property</button> */}

        <Button 
        type="" 
        text="Add New Property" 
        startIcon={<AddIcon />} 
        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}/>
        {/* <Button
        className="button"
        text="Add New"
        variant="outlined"
        sx={{ color: 'yellow', backgroundColor: 'orange', borderColor: 'green' }}
        
        startIcon={<AddIcon />} 
        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}/> */}
      </div>
      <Popup
        title = "Your Property"
        openPopup = {openPopup}
        setOpenPopup = {setOpenPopup}
      >
        <Forminput 
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
        />
      </Popup>
    </React.Fragment>
  );
}

