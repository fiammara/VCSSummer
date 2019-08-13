import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

const Duk = () => {
    const panel = (title, content) => (
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>{title}</Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <Typography>
            {content}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );

    return (
      <div className="duk">
        <Container>
          <Typography align="left"> Užduokite klausimą?</Typography>

          <TextField variant="outlined" fullWidth margin="normal" />

          <Typography align="left"> Dažniausiai užduodami klausimai</Typography>
          <br />

          {panel('Lorem ipsum dolor sit amet consetetur', 
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus exsit amet blandit leo lobortis eget.')}

          <br />
          {panel('Lorem ipsum dolor sit amet consetetur', 
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus exsit amet blandit leo lobortis eget.')}

          <br />
          {panel('Lorem ipsum dolor sit amet consetetur', 
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus exsit amet blandit leo lobortis eget.')}

          <br />
          {panel('Lorem ipsum dolor sit amet consetetur', 
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus exsit amet blandit leo lobortis eget.')}

          <br />
          <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                    officia deserunt mollit anim id est laborum.
          </Typography>
          <br />
          <Typography align="left">
              Ar buvo naudinga? 
            <span> </span> 
            <Button variant="outlined"> Taip </Button>  
            <Button variant="outlined"> Ne </Button>
          </Typography>
          <br />
        </Container>
      </div>
    );
};

export default Duk;
