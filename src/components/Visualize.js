
import './visualization.css';
import Chart from "react-apexcharts";
import React, { Component, useEffect, useRef, useState } from "react";
import {vizurl} from "../utils/fetchApi"
import axios from "axios"


function Visualize(props) {
    const url = `${vizurl}`
    const[prod,setProd]=useState([])
    useEffect(()=>{
      axios.get(url)
          .then(resp =>{
              setProd(resp.data)
          })
    },[url])

    let [count,setcount] = useState([]);
    let[states,setstates]=useState([]);
    let[colorsRandom,setColorsRandom]=useState([]);
    useEffect(()=>{
      let count = [];
      let states = [];
      let colorsArr = []
      for (let i=0;i<prod.length;i++){
        if(prod[i]["state"] != ""){
          count.push(prod[i]["count"]);
          states.push(prod[i]["state"])
          colorsArr.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
        }
      }
      setcount(count)
      setstates(states)
      setColorsRandom(colorsArr)
  },[prod])

  console.log("colors",colorsRandom)
  const piecount = {
          
    series: count,
    options: {

      labels: states,
    },
  };


    console.log("HeygraphObj",count, states)
    // console.log("countnstates",count,states)
    if(states==[]){
      return ('');
    }
    console.log("from viz",props.x)
  const state = {
    options: {
      chart: {
        id: "state"
      }
    },
    series: [
      {
        data: count
      }
    ]
  }

  return (
    <div className='cards'>
      <h1>vizualize the data here!</h1>
      <div >
      <div className='cards__wrapper'>
      <ul className='cards__items'>
      
      {/* <Chart className='cards__container'
              options={state.options}
              series={state.series}
              type="bar"
              width="500"
            /> */}
      <Chart className='cards__container'
                options={piecount.options}
                series={piecount.series}
                type="pie"
                width="500"
                // colors={piecount.options.colors}
              />
      </ul>
      </div>
      </div> 
    </div>
  );
}

export default Visualize;
