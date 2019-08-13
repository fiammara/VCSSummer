import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Main.css';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Grid from '@material-ui/core/Grid';
import CourseCardList from './Components/CourseCardList';
import { allCourses } from './Components/fakeData';

const Main = () => 

     (
         
       <div className="main">

         <Grid container spacing={2}>
           <Grid item xs={12} md={4} />
           <Grid item xs={12} md={4}>
             <div className="divas">
               <div className="textBlock">
                 <div className="tekstas">
                   <h2>
                       Lorem ipsum dolor sit
                     <span> 
                         amet, consetetur             
                     </span>
                         sadipscing elitr, sed diam nonumy eirmod tempor?
                   </h2>

                   <OutlinedInput fullWidth type="text" placeholder="Search.." name="search" />
                   <Link to="/courses" style={{ textDecoration: 'none' }}>
                     <Button className="btn1" variant="contained" color="default">Ieškoti</Button>
                   </Link>

                 </div>
               </div>
               <div className="postai">
                 <CourseCardList courses={allCourses} />
               </div>
             </div>
           </Grid>
         </Grid>

       </div>
     );
    
export default Main;
