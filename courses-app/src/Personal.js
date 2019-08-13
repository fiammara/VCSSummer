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

const Personal = () => {
  const block = (title, content) => 
  (
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
              <Typography>
                {title}
              </Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              {content}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Paper>
      </Grid>
    </Grid>
  );

return (
  <div className="personalPage">
    <Grid container spacing={3}>
      <Grid item xs={2} />
      <Grid item xs={8}>

        <Paper> 
          <img 
            className="photo" 
            src="http://www.pixelprints.co.in/images/portfolio/graphic-design/logo/small/logo_3.png" 
            alt=""
          />
          Vardas Pavardė
        </Paper>
      </Grid>
    </Grid>

    {block('Mano lankyti kursai', <CourseCardList courses={allCourses} />)}
    {block('Mano pamėgti kursai', <CourseCardList courses={allCourses} />)}
    {block('Mano pamėgti lektoriai', 
      <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
      </Typography>)}
    {block('Mano pamėgti blogo įrašai', <Blog />)}
    {block('Tvarkyti asmeninius duomenis', 
      <Typography>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
             malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>)}

    <br />
  </div>
  );
};

export default Personal;
