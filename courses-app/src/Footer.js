import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const Footer = () => {
    {
        const grids = (link, title) =>
         ( 
           <Grid item xs={6} md={3}>
             <NavLink 
               to={link}
               style={{ textDecoration: 'none' }}
             >
               <Button
                 className="button_footer"
                 variant="outlined"
                 color="default"
                 style={{ fontSize: '10px', }}
               >
                 {title}
               </Button>
             </NavLink>
           </Grid>
);
            
        return (

          <div className="footer">

            <Grid container spacing={2}>

              {grids('/duk', 'duk')}
              {grids('/blog', 'blogas')}
              {grids('#', 'slapukų nustatymas')}
              {grids('#', 'facebook')}
              {grids('#', 'privatumo politika')}
              {grids('#', 'susisiekti')}
              {grids('#', 'įmonėms')}

            </Grid>
            
            <br />
            <div className="authors"> &copy;Vasaros projektai. All rights reserved. </div>

          </div>
        );
    }
};
export default Footer;
