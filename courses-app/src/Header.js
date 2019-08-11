
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer, Tabs, Tab
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

const styleSheet = {
  list: {
    width: 200,

  },
  padding: {
    paddingRight: 30,
    cursor: 'pointer',
  },

  sideBarIcon: {
    padding: 0,
    color: 'white',
    cursor: 'pointer',
  },
  bigIndicator: {
    height: 3,
    backgroundColor: 'white'
  },
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { drawerActivate: false, drawer: false };
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount() {
    if (window.innerWidth <= 800) {
      this.setState({ drawerActivate: true });
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 800) {
        this.setState({ drawerActivate: true });
      } else {
        this.setState({ drawerActivate: false });
      }
    });
  }
  
  handleChange = (event, value) => {
    this.setState({ value });
  };

   // Small Screens
   createDrawer() {
    return (
      <div>
        <AppBar>
          <Toolbar>
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Typography color="inherit" variant="headline">{<Link to="/">LOGO</Link>}</Typography>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <MenuIcon
                className={this.props.classes.sideBarIcon}
                onClick={() => { this.setState({ drawer: true }); }}
              />
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          anchor="right"
          open={this.state.drawer}
          onClose={() => { this.setState({ drawer: false }); }}
          onOpen={() => { this.setState({ drawer: true }); }}
        >

          <div
            tabIndex={0}
            role="button"
            onClick={() => { this.setState({ drawer: false }); }}
            onKeyDown={() => { this.setState({ drawer: false }); }}
          >

            <List className={this.props.classes.list}>
              <ListItem key={1} button divider><Link to="/filter" style={{ textDecoration: 'none' }}> Detali paieška </Link></ListItem>
              <ListItem key={2} button divider><Link to="/calendar" style={{ textDecoration: 'none' }}> Kalendorius </Link></ListItem>
              <ListItem key={3} button divider><Link to="/blog" style={{ textDecoration: 'none' }}> Blog'as</Link></ListItem>
              <ListItem key={1} button divider><Link to="/personal" style={{ textDecoration: 'none' }}> Asmeninis profilis</Link></ListItem>
              <ListItem key={2} button divider><Link to="/duk" style={{ textDecoration: 'none' }}>DUK</Link></ListItem>
              <ListItem key={3} button divider><Link to="/auth" style={{ textDecoration: 'none' }}>Prisijungimas</Link></ListItem>
            </List>

          </div>
        </SwipeableDrawer>

      </div>
  );
}

// Larger Screens
destroyDrawer() {
  const { classes } = this.props;
  const { value } = this.state;
  return (

    <AppBar position="fixed" color="primary">
      <Tabs classes={{ indicator: classes.bigIndicator }} value={value} onChange={this.handleChange}>
        <Typography variant="headline" style={{ flexGrow: 1 }} color="inherit"><Link to="/">LOGO</Link></Typography>
        <Tab label="Detali paieška" component={Link} to="/filter" />
        <Tab label="Kalendorius" component={Link} to="/calendar" />
        <Tab label="Blog'as" component={Link} to="/blog" />
        <Tab label="Asmeninis profilis" component={Link} to="/personal" />
        <Tab label="Duk" component={Link} to="/duk" />
        <Tab label="Prisijungimas" component={Link} to="/auth" />
      </Tabs>
    </AppBar>

  );
}

render() {
  const { drawerActivate } = this.state;
  return (
    <div>
      {drawerActivate ? this.createDrawer() : this.destroyDrawer()}
    </div>
  );
}
  }

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(Header);
