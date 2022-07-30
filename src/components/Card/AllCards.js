import React, { Component, useEffect, useRef, useState } from "react";
import "./card.css"
import { baseUrl }  from "../../utils/fetchApi"
import axios from "axios"
import SingleCard from "./SingleCard"
import Chart from "react-apexcharts";

export default function AllCards(values){
    
    // const unique_id = uuid();
    const url = `${baseUrl}&bath=${values.values.bath}&bed=${values.values.bed}&city=${values.values.city}`
    let [graphObj,setGraphObj] = useState([]);

    const[prod,setProd]=useState([])
    
    useEffect(()=>{
        axios.get(url)
            .then(resp =>{
                setProd(resp.data)
            })
    },[url])
    useEffect(()=>{
        console.log(prod)
        let xvals = [];
        for (let i=0;i<prod.length;i++){
            xvals.push([prod[i]["acre_lot"],prod[i]["price"]]);
        }

        setGraphObj(xvals)
        
    },[prod])
    console.log("AllCards", values)
    const travel = prod.map(item=>{
        return (
            <SingleCard 
                // cardid={unique_id} 
                // unikid = (unique_id)
                {...item}

            />  
        )}
    )
    console.log("graphObj",[graphObj])
    
    const graph = {
        options: {
          chart: {
            id: "Price",
            events: {
                dataPointSelection: (event, chartContext, config) => {
                  console.log("price");
                }
              },
            toolbar: {
            show: false
            },
            
        },
          xaxis: {
            labels: {
              formatter: function(val) {
                return parseFloat(val).toFixed(1)
              }
            }
          }
        },
        
        series: [
            {
                name: "plot_price",
                data: graphObj}]
        
      }

    return(
        <div className="cardsngraphs" >
            <div className="allcards">
                {travel}
            </div>
            <div>
            <Chart className='cards__container'
                options={graph.options}
                series={graph.series}
                type="scatter"
                width= "500"
                
              />
                {/* <Visualize x={graphObj}  y_name={"Acre Lot"} x_name={"Price"}/> */}
            </div>
        </div>
        
    )
}
