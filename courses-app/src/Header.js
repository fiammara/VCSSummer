
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const styleSheet = {
  list : {
    width : 200,
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },

  sideBarIcon : {
    padding : 0,
    color : "white",
    cursor : "pointer",
  }
}

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount(){
    if(window.innerWidth <= 600){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 600){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }

  //Small Screens
  createDrawer(){
    return (
      <div>
        <AppBar >
          <Toolbar>
            <Grid container direction = "row" justify = "space-between" alignItems="center">

              <Typography color="inherit" variant = "headline">{<Link to="/">LOGO</Link>}</Typography>
              <Typography color="inherit" variant = "headline">Title</Typography>
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}} />
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer anchor="right"
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>

            <List className = {this.props.classes.list}>
               <ListItem key = {1} button divider>{<Link to="/filter" > Kategorijos </Link>}</ListItem>
               <ListItem key = {2} button divider>{<Link to="/calendar"> Kalendorius </Link>}</ListItem>
               <ListItem key = {3} button divider>{<Link to="/blog"> Blog'as</Link>}</ListItem>
               <ListItem key = {1} button divider>{<Link to="/personal"> Asmeninis profilis</Link>}</ListItem>
               <ListItem key = {2} button divider>{<Link to="/duk">DUK</Link>}</ListItem>
               <ListItem key = {3} button divider>{<Link to=""> Prisijungimas</Link>}</ListItem>
             </List>

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    const {classes} = this.props
    return (
      
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant = "headline" style={{flexGrow:1}} color="inherit" >{<Link to="/">LOGO</Link>}</Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" >{<Link to="/filter">Kategorijos</Link>}</Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" >Kalendorius</Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" >Blog'as</Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" >Asmeninis profilis</Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" >DUK</Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" >Prisijungimas</Typography>
        </Toolbar>
      </AppBar>

    )
  }

  render(){
    return(
      <div >
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

Header.propTypes = {
  classes : PropTypes.object.isRequired
};

export default withStyles(styleSheet)(Header);