import * as React from 'react';
import { styled } from '@mui/material/styles';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import '../AccordionMenu/AccordionMenu.scss'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import EpisodeButton from '../EpisodeButton/EpisodeButton'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(0, 0, 0, 0)'
      : 'rgba(0, 0, 0, 0)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary sx={{
            color: 'white',
            background: 'black',
          }} className='tab_headd' aria-controls="panel1d-content" id="panel1d-header">
          <Typography  className='tab_head'>
            <div>
               <h3>Season 2</h3> 
            </div>
            <div>
                <h5>5 Full Episodes</h5>
            </div>
            </Typography>
        </AccordionSummary>
        <AccordionDetails className='accordion_details'>

          <Typography className='episode_details'>
            <EpisodeButton/>
            
            
            <div className="duration">
                <span><AccessTimeIcon className='duration_icon'/>  28 Min</span>
            </div>
          
          </Typography>
          
          <Typography className='episode_details'>
            <EpisodeButton/>
            <div className="duration">
                <span><AccessTimeIcon className='duration_icon'/>  28 Min</span>
            </div>
          
          </Typography>
          <Typography className='episode_details'>
          <EpisodeButton/>
            <div className="duration">
                <span><AccessTimeIcon className='duration_icon'/>  28 Min</span>
            </div>
          
          </Typography>
          <Typography className='episode_details'>
          <EpisodeButton/>
            <div className="duration">
                <span><AccessTimeIcon className='duration_icon'/>  28 Min</span>
            </div>
          
          </Typography>
          <Typography className='episode_details'>
          <EpisodeButton/>
            <div className="duration">
                <span><AccessTimeIcon className='duration_icon'/>  28 Min</span>
            </div>
          
          </Typography>
          
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary  
          sx={{
            color: 'white',
            background: 'black',
          }} className='tab_headd' aria-controls="panel1d-content" id="panel1d-header">
          <Typography className='tab_head'>
            <h3>Season 1</h3>
            <h5>5 Full Episodes</h5> </Typography>
        </AccordionSummary>
        <AccordionDetails className='accordion_details'>

          <Typography className='episode_details'>
            <div className="episode_no">
                <span> <PlayArrowIcon className='play_icon'/> Episode 1 - The World Is Purple</span> 
            </div>
            <div className="duration">
                <span><AccessTimeIcon className='duration_icon'/>  28 Min</span>
            </div>
          
          </Typography>
          <Typography className='episode_details'>
            <div className="episode_no">
                <span> <PlayArrowIcon className='play_icon'/> Episode 2 - Meaner Than Evil</span> 
            </div>
            <div className="duration">
                <span><AccessTimeIcon className='duration_icon'/>  28 Min</span>
            </div>
          
          </Typography>
          <Typography className='episode_details'>
            <div className="episode_no">
                <span> <PlayArrowIcon className='play_icon'/> Episode 3 - I Killed a Man Today</span> 
            </div>
            <div className="duration">
                <span><AccessTimeIcon className='duration_icon'/>  28 Min</span>
            </div>
          
          </Typography>
          <Typography className='episode_details'>
            <div className="episode_no">
                <span> <PlayArrowIcon className='play_icon'/>   Episode 4 - Cowboys and Dreamers</span> 
            </div>
            <div className="duration">
                <span><AccessTimeIcon className='duration_icon'/>  28 Min</span>
            </div>
          
          </Typography>
          <Typography className='episode_details'>
            <div className="episode_no">
                <span> <PlayArrowIcon className='play_icon'/>  Episode 1 - The World Is Purple</span> 
            </div>
            <div className="duration">
                <span><AccessTimeIcon className='duration_icon'/>  28 Min</span>
            </div>
          
          </Typography>
          
        </AccordionDetails>
      </Accordion>
    </div>
  );
}