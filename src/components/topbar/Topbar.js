import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import React, {Component} from "react";

export default class Topbar extends Component{z

  constructor(props){
    super(props)
    console.log(props)
    this.state=props.values;
    console.log(this.state)
    // this.props.handleValues(this.state)
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate');
    }
  }

  handleKeyPress=(e)=>{
    if (e.key === 'Enter') {
      this.setState({
        [e.target.name]: e.target.value,
        bed:'',
        bath:''
      })
      console.log("location",e.target.value)
      this.props.handleKeyPressloc(this.state);
    }
    
  }

  // handleSubmit = (e)=>{
  //   e.preventDefault()  
  //   this.props.handleValues(this.state);

  //   //  return (this.state);
  // }

  render(){
    const {location} = this.state
    return (
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Real_Estimator</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input
              type= "text"
              name="city"
              placeholder="Search by location"
              className="searchInput"
              value={location}
              onKeyPress={this.handleKeyPress}
              
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            {/* <span className="topbarLink">Timeline</span> */}
          </div>
          {/* <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
          </div> */}
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
        </div>
      </div>
    );
}
}