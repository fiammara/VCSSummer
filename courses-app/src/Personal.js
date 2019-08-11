import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CourseCardList from './Components/CourseCardList';
import { allCourses } from './Components/fakeData';
import Blog from './Blog';

const Personal = () => 
(
  <div className="personalPage">
    <Grid container spacing={3}>
      <Grid item xs={2} />
      <Grid item xs={8}>

        <Paper> 
          <img className="photo" src="http://www.pixelprints.co.in/images/portfolio/graphic-design/logo/small/logo_3.png" alt="" />
          Vardas Pavardė
        </Paper>
      </Grid>
    </Grid>

    <Grid container spacing={3}>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Paper> 
          {' '}
          <ExpansionPanel>

            <ExpansionPanelSummary 
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header2"
            >
              <Typography>Mano lankyti kursai</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <CourseCardList courses={allCourses} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Paper>
      </Grid>
    </Grid>

    <Grid container spacing={3}>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Paper> 
          {' '}
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header2"
            >
              <Typography>Mano pamėgti kursai</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <CourseCardList courses={allCourses} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Paper>
      </Grid>
    </Grid>
    <Grid container spacing={3}>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Paper> 
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header2"
            >
              <Typography>Mano pamėgti lektoriai</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Paper>
      </Grid>
    </Grid>

    <Grid container spacing={3}>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Paper> 
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header2"
            >
              <Typography>Mano pamėgti blogo įrašai</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <Blog />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Paper>
      </Grid>
    </Grid>

    <Grid container spacing={3}>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Paper> 
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header2"
            >
              <Typography>Tvarkyti asmeninius duomenis</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <Typography>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
             malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Paper>
      </Grid>
    </Grid>
    <br />

  </div>
  );
    
export default Personal;
