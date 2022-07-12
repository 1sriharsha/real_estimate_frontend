import {useEffect, useState} from "react";
import {filterData, getFilterValues} from "../../utils/filterData"
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';

const Searchfilters = () =>{
    const [filters, setFilters] = useState(filterData);
    
    const searchproperties=(filterValues)=>{

    }
    return(
        <div className="flex">
            {filters.map((filter)=>(
                <box key={filter.queryName}>
                    <select
                    placeholder={filter.placeholder}
                    onChange={(e)=>searchproperties({ [filter.queryName]: e.target.value})}>
                    </select>
                    
                </box>
            ))}
        </div>
    )
}

export default Searchfilters;