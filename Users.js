
import React, { Component } from "react";
import songs from "../services/songs";
import SongCard from "./SongCard";


//const handleClick = evt =>  {this.state.users.sort((a,b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1)};

// class LoggingButton extends Component {
 // class Notification extends Component {
    // state = {
    //   show: true
    // };
    // toggleDisplay = () =>
    //   this.setState({
    //     show: !this.state.show
    //   });
  //   render() {
  //     return (
  //       <div className="notification-widget">
  //         <div className="toggle-btn" onClick={this.toggleDisplay}>
  //           N
  //         </div>
  //         {this.state.show ? <NotificationText text={this.props.text} /> : null}
  //       </div>
  //     );
  //   }
  // }
class Users extends Component {
  state = {
    users: [],
    show: true
  };
  toggleDisplay = () => {

   this.setState({
    show: !this.state.show
    });

    this.state.show ? this.state.users.sort((a,b) => b.rating - a.rating) : this.state.users.sort((a,b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1); 

  }

  componentDidMount = async () => {
    const fetchUsers = await songs();
    this.setState({
      users: fetchUsers});
    }
      // handleClick = evt => {
      //   this.state.users.map(u => <ProfileCard data={u} key={u.id} />);

 /* //  <button onClick={this.handleClick}>
        //    Sort by Title
        //  </button>  */


//   }
  // {switch (Ratings) {
  //   case 1:
      
  //     break;
  
  //   default:
  //     break;
  // }}
/* {this.state.show ? this.state.users.map(u => <ProfileCard data={u} key={u.id} />) : this.state.users.sort((a,b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1)} */

  render(){
  return (
 
    <div className="st-btn" onClick={this.toggleDisplay}>

SORT


    
    {this.state.show ? this.state.users.map(u => <SongCard data={u} key={u.id} />) : this.state.users.map(u => <SongCard data={u} key={u.id} />) }
 
  </div>     
  );
      // //  {if (isSorted) {
      // //   this.state.users.sort((a,b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1)
      // //  }},
      //  this.state.users.map(u => <ProfileCard data={u} key={u.id} />)]

}
}
// {this.state.show ? this.state.users.sort((a,b) => b.rating - a.rating) : this.state.users.sort((a,b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1)},

   // this.state.users.sort((a,b) => b.rating - a.rating);
    //this.state.users.sort((a,b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1);

    // return(
    //  this.state.users.map(u => <ProfileCard data={u} key={u.id} />),
 
    //  {if (isClicked) {
    //   this.state.users.sort((a,b) => b.rating - a.rating);
    //   this.state.users.map(u => <ProfileCard data={u} key={u.id} />)}
    //  }

//     )

export default Users;
