import React from 'react';
import "./App.css";
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

class Footer extends React.Component {

    render() {
        return (

            <div className="footer" >

                <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                        <NavLink to='/duk'>
                            <Button className="button_footer" variant="outlined" color="default" style={{ fontSize: '10px' }}>DUK </Button></NavLink>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <NavLink to='/blog'>   <Button className="button_footer" variant="outlined" color="default" style={{ fontSize: '10px' }}>BLOGAS</Button></NavLink>
                    </Grid>

                    <Grid item xs={6} md={3}>
                        <Button className="button_footer" variant="outlined" color="default" style={{ fontSize: '10px' }}>SLAPUKŲ NUSTATYMAS</Button>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Button className="button_footer" variant="outlined" color="default" style={{ fontSize: '10px' }}>FACEBOOK</Button>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Button className="button_footer" variant="outlined" color="default" style={{ fontSize: '10px' }}>PRIVATUMO POLITIKA</Button>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Button className="button_footer" variant="outlined" color="default" style={{ fontSize: '10px' }}>SUSISIEKTI</Button>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Button className="button_footer" variant="outlined" color="default" style={{ fontSize: '10px' }}>ĮMONĖMS</Button>
                    </Grid>
                </Grid>
                <br />
                <div className="authors"> &copy;Vasaros projektai. All rights reserved. </div>

            </div>
        );
    }

}

export default Footer;