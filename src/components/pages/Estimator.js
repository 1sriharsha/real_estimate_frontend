// // import classNames from 'classnames';

// import React from 'react';
// import { Grid } from '@material-ui/core';
// import '../../App.css';
// import Btn from "../Btn"
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import { Box } from '@material-ui/core';
// import { Autorenew, CenterFocusStrong } from '@material-ui/icons';

// const styles = theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   margin: {
//     margin: theme.spacing.unit,
//   },
//   textField: {
//     flexBasis: 200,
//   },
// });

// const ranges = [
//   {
//     value: '0-20',
//     label: '0 to 20',
//   },
//   {
//     value: '21-50',
//     label: '21 to 50',
//   },
//   {
//     value: '51-100',
//     label: '51 to 100',
//   },
// ];

// const bednbath = [
//   {value: '1', label: '1'},
//   {value: '2', label: '2',},
//   {value: '3', label: '3',},
//   {value: '4', label: '4',},
//   {value: '5', label: '5',},
// ];


// class Estimator extends React.Component {
//   state = {
//     acre_lot: '',
//     house_size: '',
//     bed: '',
//     bath: '',
//     city: '',
//     state: '',
//   };

//   handleChange = prop => event => {
//     console.log(event)
//     this.setState({ [prop]: event.target.value });
//   };

//   handleClickShowPassword = () => {
//     this.setState(state => ({ showPassword: !state.showPassword }));
//   };

//   handleSubmit = prop => e => {
//     e.preventDefault()
//     console.log("handlesubmit", e )
//   }
//   render() {
//     const { classes } = this.props;

//     return (


//       <div className='estimator' onSubmit={this.handleSubmit}>
      
        
//       <div className={classes.root}>
        
//         <TextField
//           id="outlined-simple-start-adornment"
//           // className={classNames(classes.margin, classes.textField)}
//           variant="outlined"
//           label="acre_lot"
//           InputProps={{
//             startAdornment: <InputAdornment position="start"> number</InputAdornment>,
//           }}
//         />
//         <TextField
//           id="outlined-simple-start-adornment"
//           // className={classNames(classes.margin, classes.textField)}
//           variant="outlined"
//           label="house_size"
//           InputProps={{
//             startAdornment: <InputAdornment position="start">number</InputAdornment>,
//           }}
//         />
//         <TextField
//           select
//           // className={classNames(classes.margin, classes.textField)}
//           variant="outlined"
//           label="bed"
//           value={this.state.weightRange}
//           onChange={this.handleChange('weightRange')}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">bed</InputAdornment>,
//           }}
//         >
//           {bednbath.map(bedoption => (
//             <MenuItem key={bedoption.value} value={bedoption.value}>
//               {bedoption.label}
//             </MenuItem>
//           ))}
//         </TextField>

//         <TextField
//           select
//           // className={classNames(classes.margin, classes.textField)}
//           variant="outlined"
//           label="bath"
//           value={this.state.weightRange}
//           onChange={this.handleChange('weightRange')}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">bath</InputAdornment>,
//           }}
//         >
//           {bednbath.map(option => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
        
//         <TextField
//           id="outlined-simple-start-adornment"
//           // className={classNames(classes.margin, classes.textField)}
//           variant="outlined"
//           label="city"
//           InputProps={{
//             startAdornment: <InputAdornment position="start">string</InputAdornment>,
//           }}
//         />
//         <TextField
//           id="outlined-simple-start-adornment"
//           // className={classNames(classes.margin, classes.textField)}
//           variant="outlined"
//           label="state"
//           InputProps={{
//             startAdornment: <InputAdornment position="start">string</InputAdornment>,
//           }}
//         />
//       </div>
//       <Btn
//           type="submit" 
//           text="estimate"
//                />

//       </div>
//     );
//   }
// }

// Estimator.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Estimator);


import React , { useState, useEffect } from 'react';

import { Grid } from '@material-ui/core';
import '../../App.css';
import Btn from "../Btn"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Box } from '@material-ui/core';
import { Autorenew, CenterFocusStrong, HeadsetOutlined } from '@material-ui/icons';
import {estimatorurl} from "../../utils/fetchApi"
import axios from "axios";

export default function Estimator() {
  const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
  });

  const bednbath = [
    {value: '1', label: '1'},
    {value: '2', label: '2',},
    {value: '3', label: '3',},
    {value: '4', label: '4',},
    {value: '5', label: '5',},
  ];

  const [values, setValues] = useState({
        acre_lot: '1',
        house_size: '1',
        bed: '',
        bath: '',
        city: '',
        state: '',
  });
    
  const  handleChange = (e) => {
        // console.log("onchange",values)
        setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };


  // const [data, setData] = useState({data: []});
  // const [isLoading, setIsLoading] = useState(false);
  
  const [err, setErr] = useState('');
  const[estimated,setestimated]=useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [showresult, setshowresult] = useState(false)
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    await axios.get(`${estimatorurl}city=${values.city}&beds=${values.bed}&bath=${values.bath}`)
      .then(resp =>{
        const result  =  resp.data
        setestimated(result)
    })
    setIsLoading(await false)
    setshowresult(await true)
    console.log( estimated.avg_price_per_acre)
    
  };

  return (
    
    <div className='estimator'  >
      <div className="headline"> Enter your desired house properties here and get an estimated price! </div>
      <form onSubmit={handleSubmit} >
        
        <div className="formformat">
          <TextField
              select
              variant="outlined"
              label="bed"
              name = "bed"
              value={values.bed}
              onChange={handleChange}
              InputProps={{
                startAdornment: <InputAdornment position="start">bed</InputAdornment>,
              }}
          >
              {bednbath.map(bedoption => (
                <MenuItem key={bedoption.value} value={bedoption.value}>
                  {bedoption.label}
                </MenuItem>
              ))}
          </TextField>
          <TextField
              select
              variant="outlined"
              label="bath"
              name = "bath"
              value={values.bath}
              onChange={handleChange}
              InputProps={{
                startAdornment: <InputAdornment position="start">bath</InputAdornment>,
              }}
            >
              {bednbath.map(bedoption => (
                <MenuItem key={bedoption.value} value={bedoption.value}>
                  {bedoption.label}
                </MenuItem>
              ))}
          </TextField>
          <TextField
              id="outlined-simple-start-adornment"
              variant="outlined"
              label="city"
              name = "city"
              value={values.city}
              onChange={handleChange}
              InputProps={{
                startAdornment: <InputAdornment position="start">string</InputAdornment>,
              }}
            />
        </div>
          {/* <TextField
            id="outlined-simple-start-adornment"
            variant="outlined"
            label="state"
            name='state'
            value={values.state}
            onChange={handleChange}
            InputProps={{
              startAdornment: <InputAdornment position="start">string</InputAdornment>,
            }}
          /> */}
        <div className="formformat">
        <TextField
              id="outlined-simple-start-adornment"
              variant="outlined"
              label="acre_lot"
              name = "acre_lot"
              value={values.acre_lot}
              onChange={handleChange}
              InputProps={{
                startAdornment: <InputAdornment position="start"> number</InputAdornment>,
              }}
            />
          <TextField 
              id="outlined-simple-start-adornment"
              variant="outlined"

              name = "house_size"
              value={values.house_size}
              onChange={handleChange}
              label="house_size"
              InputProps={{
                startAdornment: <InputAdornment position="start">number </InputAdornment>,
              }}
            />
        </div>
              
            {/* <button type="submit">estimate</button> */}
          <Btn type="submit" text="estimate" />
          
          {isLoading && <h2 style={{ margin: "10px"}} > Loading...</h2>} 
          {showresult && <div className="estimatedresult" ><p>
            The estimated price of house at {values.city} according to
            acre_lot {values.acre_lot} -<b>{Math.round(estimated.avg_price_per_acre * values.acre_lot, 2)} </b> 
            and according to size {values.house_size} -<b> {Math.round(estimated.avg_price_per_area * values.house_size, 2)}</b>
          </p></div>}
          
    </form>
       
    </div>
  );  
}